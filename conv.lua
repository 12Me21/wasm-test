io.write("let WASM_CODE = new Uint8Array([", io.read"*all":gsub(".", function(c) return c:byte(1).."," end),"]).buffer")
