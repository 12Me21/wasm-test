main: test.wasm.js

# output executable
output = test.wasm

%.wasm.js: %.wasm
	luajit conv.lua <$< >$@

# all the .c files
srcs := test.c test2.c



CC = clang
CFLAGS = --target=wasm32
LDFLAGS+= --target=wasm32 -nostdlib -Wl,--no-entry,--export-all

CFLAGS+= -Wall -Wextra -pedantic -std=c11 # turn on a bunch of warnings
CFLAGS+= -Wno-sign-compare -Wno-unused-parameter -Wno-missing-field-initializers -Wno-parentheses -Wno-char-subscripts # disable these warnings
CFLAGS+= -Werror=implicit-function-declaration -Werror=incompatible-pointer-types # make these warnings into errors



include .Nice.mk