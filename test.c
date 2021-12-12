#include <stdint.h>
#include <stdbool.h>

typedef struct Pixel {
	uint8_t r,g,b,a;
} Pixel;
//                           0 1 2 3 4 5 6 7 8
static const bool stay[9] = {0,0,0,1,1,1,1,0,0};
static const bool born[9] = {0,0,1,0,0,0,0,1,1};
static const int fade = 6;

void life(int width, int height, Pixel img[height][width]) {
	Pixel temp[height][width];
	for (int y=0; y<height; y++) {
		for (int x=0; x<width; x++) {
			int neighbors = 0;
			int alive = img[y][x].a ==255;
			for (int j=-1; j<=1; j++) {
				for (int i=-1; i<=1; i++) {
					if (i || j) {
						Pixel n = img[(y+j+height)%height][(x+i+width)%width];
						if (n.a == 255)
							neighbors += 1;
					}
				}
			}
			if (alive) {
				if (stay[neighbors])
					temp[y][x].a = 255;
				else if (temp[y][x].a-- <= 255-fade)
					temp[y][x].a = 0;
			} else {
				if (temp[y][x].a==0) {
					if (born[neighbors])
						temp[y][x].a = 255;
				} else {
					if (temp[y][x].a-- <= 255-fade)
						temp[y][x].a = 0;
				}
			}
			if (temp[y][x].a) {
				temp[y][x].r = (255-temp[y][x].a)*255/fade;
			}
		}
	}
	for (int y=0; y<height; y++) {
		for (int x=0; x<width; x++) {
			img[y][x] = temp[y][x];
		}
	}
}
