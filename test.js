WebAssembly.instantiate(WASM_CODE).then(result => {
	window.ex = result.instance.exports
	result.instance.exports.memory.grow(100)
	let b = result.instance.exports.memory.buffer
	let w = $canvas.width
	let h = $canvas.height
	let data = new Uint8ClampedArray(b, ex.__heap_base, w*h*4)
	let image = new ImageData(data, w, h)
	let ctx = $canvas.getContext('2d')
	for (var y=0; y<h; y++) {
		for (var x=0; x<w; x++) {
			if (Math.random()>0.6 && y%10<5 && x<w/2) {
				data[(y*w+x)*4+3] = 255
//				data[(y*w+x)*4] = Math.random()*256 | 0
//				data[(y*w+x)*4+1] = Math.random()*256 | 0
//				data[(y*w+x)*4+2] = Math.random()*256 | 0
			}
		}
	}
	
	let stay = new Uint8Array(b, ex.stay.value, 9);
	let born = new Uint8Array(b, ex.born.value, 9);
	let fade = new Uint32Array(b, ex.fade.value, 1);
	
	let rules = window.location.search.match(/^\?(\d*)\/(\d*)(?:\/(\d*))?/)
	if (rules) {
		console.log(rules)
		for (let i=0; i<=8; i++) {
			stay[i] = born[i] = false
		}
		for (let x of rules[1]) {
			console.log(x)
			stay[x] = true
		}
		for (let x of rules[2]) {
			born[x] = true
		}
		if (rules[3])
			fade[0] = +rules[3]
	}
	
	function update() {
		result.instance.exports.life(w, h, ex.__heap_base)
		ctx.putImageData(image, 0, 0)
		window.requestAnimationFrame(update)
	}
	window.requestAnimationFrame(update)
/*	$canvas.onmousemove = function(e) {
		let x = e.offsetX | 0
		let y = e.offsetY | 0
		console.log(x,y)
		data[(y*w+x)*4+3] = 255
	}*/
})
