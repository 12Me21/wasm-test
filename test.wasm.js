let WASM_CODE = new Uint8Array([0,97,115,109,1,0,0,0,1,10,2,96,0,0,96,3,127,127,127,0,3,3,2,0,1,4,5,1,112,1,1,1,5,3,1,0,77,6,45,7,127,1,65,192,158,177,2,11,127,0,65,128,8,11,127,0,65,128,8,11,127,0,65,128,8,11,127,0,65,192,158,177,2,11,127,0,65,0,11,127,0,65,1,11,7,126,9,6,109,101,109,111,114,121,2,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,0,0,4,108,105,102,101,0,1,12,95,95,100,115,111,95,104,97,110,100,108,101,3,1,10,95,95,100,97,116,97,95,101,110,100,3,2,13,95,95,103,108,111,98,97,108,95,98,97,115,101,3,3,11,95,95,104,101,97,112,95,98,97,115,101,3,4,13,95,95,109,101,109,111,114,121,95,98,97,115,101,3,5,12,95,95,116,97,98,108,101,95,98,97,115,101,3,6,10,135,5,2,2,0,11,129,5,1,16,127,35,128,128,128,128,0,34,3,26,32,3,32,1,32,0,108,65,2,116,65,15,106,65,112,113,107,34,4,26,2,64,32,1,65,1,72,13,0,32,2,65,3,106,33,5,32,0,65,2,116,33,6,32,4,65,3,106,33,7,32,0,65,1,72,33,8,65,0,33,9,3,64,2,64,32,8,13,0,32,4,32,9,32,0,108,65,2,116,106,33,10,32,2,32,9,32,1,106,34,3,32,1,111,32,0,108,65,2,116,106,33,11,32,2,32,3,65,1,106,32,1,111,32,0,108,65,2,116,106,33,12,32,2,32,3,65,127,106,32,1,111,32,0,108,65,2,116,106,33,13,65,0,33,14,32,5,33,15,32,7,33,3,3,64,32,13,32,0,32,14,106,34,16,65,127,106,32,0,111,65,2,116,34,17,106,45,0,3,65,255,1,70,32,13,32,16,32,0,111,65,2,116,34,18,106,45,0,3,65,255,1,70,106,32,13,32,16,65,1,106,32,0,111,65,2,116,34,16,106,45,0,3,65,255,1,70,106,32,11,32,17,106,45,0,3,65,255,1,70,106,32,11,32,16,106,45,0,3,65,255,1,70,106,32,12,32,17,106,45,0,3,65,255,1,70,106,32,12,32,18,106,45,0,3,65,255,1,70,106,32,12,32,16,106,45,0,3,65,255,1,70,106,33,16,2,64,2,64,2,64,2,64,2,64,2,64,32,15,45,0,0,65,255,1,71,13,0,2,64,32,16,65,125,106,65,4,79,13,0,32,10,32,14,65,2,116,106,65,3,106,33,17,12,2,11,65,0,32,3,45,0,0,34,16,65,127,106,32,16,65,250,1,73,27,33,16,12,3,11,32,3,45,0,0,34,17,13,1,32,3,33,17,65,251,0,32,16,118,65,1,113,13,4,11,65,255,1,33,16,32,17,65,255,1,58,0,0,12,2,11,65,0,32,17,65,127,106,32,17,65,250,1,73,27,33,16,11,32,3,32,16,58,0,0,32,16,65,255,1,113,69,13,1,11,32,3,65,125,106,32,16,65,127,115,65,255,1,113,65,255,1,108,65,6,110,58,0,0,11,32,15,65,4,106,33,15,32,3,65,4,106,33,3,32,0,32,14,65,1,106,34,14,71,13,0,11,11,32,5,32,6,106,33,5,32,7,32,6,106,33,7,32,9,65,1,106,34,9,32,1,71,13,0,11,32,1,65,1,72,13,0,32,0,65,1,72,13,0,32,0,65,2,116,33,13,65,0,33,15,3,64,32,2,33,3,32,4,33,14,32,0,33,12,3,64,32,3,32,14,40,2,0,54,0,0,32,3,65,4,106,33,3,32,14,65,4,106,33,14,32,12,65,127,106,34,12,13,0,11,32,2,32,13,106,33,2,32,4,32,13,106,33,4,32,15,65,1,106,34,15,32,1,71,13,0,11,11,11,0,33,4,110,97,109,101,1,26,2,0,17,95,95,119,97,115,109,95,99,97,108,108,95,99,116,111,114,115,1,4,108,105,102,101,0,47,9,112,114,111,100,117,99,101,114,115,1,12,112,114,111,99,101,115,115,101,100,45,98,121,1,12,68,101,98,105,97,110,32,99,108,97,110,103,8,49,49,46,48,46,49,45,50,]).buffer