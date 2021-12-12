var memory = new WebAssembly.Memory({initial:100});

var importObject = {
	imports: {
		env: {
			
		}
	}
}

WebAssembly.instantiate(WASM_CODE, { imports: { memory: memory } }).then(result => {
	window.ex = result.instance.exports
	result.instance.exports.memory.grow(100)
	let b = result.instance.exports.memory.buffer
	let w = $canvas.width
	let h = $canvas.height
	let data = new Uint8ClampedArray(b, 1024, w*h*4)
	let image = new ImageData(data, w, h)
	let ctx = $canvas.getContext('2d')
	for (var y=0; y<h; y++) {
		for (var x=0; x<w; x++) {
			if (Math.random()>0.5) {
				data[(y*w+x)*4] = 255
				data[(y*w+x)*4+1] = 255
				data[(y*w+x)*4+2] = 255
			}
			data[(y*w+x)*4+3] = 255
		}
	}
	function update() {
		result.instance.exports.life(w, h, 1024)
		ctx.putImageData(image, 0, 0)
		window.requestAnimationFrame(update)
	}
	window.requestAnimationFrame(update)
})
