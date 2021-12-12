#include <stdint.h>

typedef struct Pixel {
	uint8_t r,g,b,a;
} Pixel;

void fill(Pixel* array, int length) {
	for (int i=0; i<length; i++) {
		array[i] = (Pixel){i,i,i,255};
	}
}
