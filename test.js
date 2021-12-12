WebAssembly.instantiate(WASM_CODE).then(result => {
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
			if (Math.random()>0.7) {
				data[(y*w+x)*4+3] = 255
				data[(y*w+x)*4] = Math.random()*256 | 0
				data[(y*w+x)*4+1] = Math.random()*256 | 0
				data[(y*w+x)*4+2] = Math.random()*256 | 0
			}
		}
	}
	ctx.putImageData(image, 0, 0)
		result.instance.exports.life(w, h, 1024)
		ctx.putImageData(image, 0, 0)
	function update() {
		result.instance.exports.life(w, h, 1024)
		ctx.putImageData(image, 0, 0)
		window.requestAnimationFrame(update)
	}
	window.requestAnimationFrame(update)
})
