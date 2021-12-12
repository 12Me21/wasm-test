#include <stdint.h>

typedef struct Pixel {
	uint8_t r,g,b,a;
} Pixel;

void life(int width, int height, Pixel img[height][width]) {
	Pixel temp[height][width];
	for (int y=0; y<height; y++) {
		for (int x=0; x<width; x++) {
			int neighbors = 0;
			for (int j=-1; j<=1; j++) {
				for (int i=-1; i<=1; i++) {
					if (i || j)
						neighbors += img[(y+j+height)%height][(x+i+width)%width].r != 0;
				}
			}
			int alive = img[y][x].r != 0;
			if (neighbors==3 || (alive && neighbors==2))
				temp[y][x] = (Pixel){255,255,255,255};
			else
				temp[y][x] = (Pixel){0,0,0,255};			
		}
	}
	for (int y=0; y<height; y++) {
		for (int x=0; x<width; x++) {
			img[y][x] = temp[y][x];
		}
	}
}
