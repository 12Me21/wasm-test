#include <stdint.h>

typedef struct Pixel {
	uint8_t r,g,b,a;
} Pixel;

void life(int width, int height, Pixel img[height][width]) {
	Pixel temp[height][width];
	for (int y=0; y<height; y++) {
		for (int x=0; x<width; x++) {
			int nr = 0;
			int ng = 0;
			int nb = 0;
			int neighbors = 0;
			int alive = img[y][x].a != 0;
			for (int j=-1; j<=1; j++) {
				for (int i=-1; i<=1; i++) {
					if (i || j) {
						Pixel n = img[(y+j+height)%height][(x+i+width)%width];
						if (n.a != 0) {
							neighbors += 1;
							nr += n.r;
							ng += n.g;
							nb += n.b;
						}
					}
				}
			}
			if (neighbors==3 || (alive && neighbors==2)) {
				temp[y][x].a = 255;
				if (!alive) {
					if (nr>128)
						nr += neighbors-1;
					if (ng>128)
						ng += neighbors-1;
					if (nb>128)
						nb += neighbors-1;
							
					temp[y][x].r = (nr)/neighbors;
					temp[y][x].g = (ng)/neighbors;
					temp[y][x].b = (nb)/neighbors;
				}
			} else {
				temp[y][x] = (Pixel){0,0,0,0};
			}
		}
	}
	for (int y=0; y<height; y++) {
		for (int x=0; x<width; x++) {
			img[y][x] = temp[y][x];
		}
	}
}
