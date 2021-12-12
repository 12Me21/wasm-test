var memory = new WebAssembly.Memory({initial:10});

var importObject = {
	imports: {
		env: {
			
		}
	}
}

WebAssembly.instantiate(WASM_CODE, importObject).then(result => {
	console.log(result.instance.exports)
	let b = result.instance.exports.memory.buffer
	let data = new Uint8ClampedArray(b, 1024, 100*100*4)
	let image = new ImageData(data, 100, 100)
	let ctx = $canvas.getContext('2d')
	result.instance.exports.fill(1024, 100*100)
	ctx.putImageData(image, 0, 0)
})
