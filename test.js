var importObject = {
	imports: {
		env: {
			
		}
	}
}

WebAssembly.instantiate(WASM_CODE, importObject).then(result=> {
	console.log(result.instance.exports)
})
