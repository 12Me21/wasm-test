var memory = new WebAssembly.Memory({initial:10});

var importObject = {
	imports: {
		env: {
			
		}
	}
}

WebAssembly.instantiate(WASM_CODE).then(result => {
	let b = result.instance.exports.memory.buffer
	let data = new Uint8ClampedArray(b, 1024, 100*100*4)
	let image = new ImageData(data, 100, 100)
	let ctx = $canvas.getContext('2d')
	for (var y=0; y<100; y++) {
		for (var x=0; x<100; x++) {
			if (Math.random()>0.5) {
				data[(y*100+x)*4] = 255;
				data[(y*100+x)*4+1] = 255;
				data[(y*100+x)*4+2] = 255;
			}
			data[(y*100+x)*4+3] = 255;
		}
	}
	$canvas.onclick = function() {
		result.instance.exports.life(100, 100, 1024)
		ctx.putImageData(image, 0, 0)
	}
})
