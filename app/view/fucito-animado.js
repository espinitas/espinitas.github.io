import { narrow, pmod } from "../main/src/panda/untercio.js";

export class FucitoAnimado {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.counter = 0;
        this.x = 0;
        this.dx = 2;
        this.lastUpdate = Date.now();
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;
        if (this.canvas.width !== width || this.canvas.height !== height) {
            this.canvas.width = width;
            this.canvas.height = height;
        }
    }

    load(numberPictures) {
        return new Promise((done) => {
            this.images = [];
            this.imageCounter = numberPictures;
            this.imageloaded = 0;
            const counterOffset = 9;
            for (let i = 0; i < this.imageCounter; i++) {
                const image = new Image();
                this.images.push(image);
                image.onload = () => {
                    this.imageloaded++;
                    if (this.imageloaded === this.imageCounter) {
                        done();
                    }
                };
                image.src = `./resources/fucito/walk/walk_${String(i + counterOffset).padStart(2, '0')}.png`;
            }
        });
    }

    draw() {
        window.requestAnimationFrame(() => {
            if (this.elapsedTime()) {
                const image = this.images[pmod(this.counter++, this.images.length)];
                this.update();
                this.drawImage(image);
            }
            this.draw();
        });
    }

    update() {
        this.x += this.dx;
    }

    elapsedTime() {
        const now = Date.now();
        const diff = now - this.lastUpdate;
        if (diff > 45) {
            this.lastUpdate = now;
            return true;
        }
    }

    drawImage(image) {
        const scale = 0.2;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(image, narrow(this.x, -100, this.canvas.width + 100), 0, image.width * scale, image.height * scale);
    }
}