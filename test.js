var importObject = {
	imports: {
		imported_func: function(arg) {
			console.log(arg)
		}
	}
}

WebAssembly.instantiate(WASM_TEST, importObject).then(result=> {
	result.instance.exports.exported_func()
})
