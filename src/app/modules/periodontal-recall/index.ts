import anime from 'animejs/lib/anime.es.js';

interface Coordinate {
    x: number;
    y: number;
  }

export class Index {
    currentIndex = 0;
    numberThresholds?: [number, number, number, number, number];
    stringThresholds?: [string, string, string, string, string];
    angle: number;                          // Clockwise from north on graph
    coordinate: Coordinate;                 // Location of point on graph
    id: string;                             // id in html
    currentValue: number | string;
    thresholdIndex = 2;                     // Index before value is shown
    textBuffer = 25;                        // x distance between text holder and text

    constructor(
        thresholds: [number, number, number, number, number] | [string, string, string, string, string],
        angle: number,
        id: string) {
            if (typeof thresholds[0] === 'number') {
                this.numberThresholds = thresholds as [number, number, number, number, number];
            } else if (typeof thresholds[0] === 'string') {
                this.stringThresholds = thresholds as [string, string, string, string, string];
            }

            this.angle = angle;

            this.id = id;
    }

    setValue(value: number | string): boolean {
        if (this.currentValue !== value) {
            this.currentValue = value;
            this.resizeTextholder();
        }

        const oldIndex = this.currentIndex;
        if (this.numberThresholds) {
            if (value <= this.numberThresholds[0] ) {
                this.currentIndex = 1;
            } else if (value <= this.numberThresholds[1]) {
                this.currentIndex = 2;
            } else if (value <= this.numberThresholds[2]) {
                this.currentIndex = 3;
            } else if (value <= this.numberThresholds[3]) {
                this.currentIndex = 4;
            } else if (value <= this.numberThresholds[4]) {
                this.currentIndex = 5;
            } else if (value > this.numberThresholds[4]) {
                this.currentIndex = 5.5;
            }
        } else if (this.stringThresholds) {
            if (value === this.stringThresholds[0] ) {
                this.currentIndex = 1;
            } else if (value === this.stringThresholds[1]) {
                this.currentIndex = 2;
            } else if (value === this.stringThresholds[2]) {
                this.currentIndex = 3;
            } else if (value === this.stringThresholds[3]) {
                this.currentIndex = 4;
            } else if (value === this.stringThresholds[4]) {
                this.currentIndex = 5;
            }
        }
        // Returns true if the index has changed
        return oldIndex !== this.currentIndex;
    }

    // Use to work out where points of the graph need to be
    rotateCoordinate(origin: Coordinate, distance: number): Coordinate {
        const radians = -this.angle * (Math.PI / 180);
        const newX = +(0 * Math.cos(radians) - distance * Math.sin(radians)).toFixed(6);
        const newY = +(0 * Math.sin(radians) + distance * Math.cos(radians)).toFixed(6);
        return {x: origin.x + newX, y: origin.y - newY};
    }

    async resizeTextholder() {
        setTimeout(() => {
            if (this.currentIndex > this.thresholdIndex) {
            const textItem = document.getElementById(this.id) as unknown as SVGGraphicsElement;
            const textWidth = textItem.getBBox().width;
            anime({
                easing: 'easeOutQuad',
                duration: 250,
                targets: '.' + this.id + '.text-holder',
                width: textWidth + this.textBuffer,
            });
        }
    });
    }

    // Animate the dot for a value
  async animatePoint(strokeColor: string, fillColor: string) {
    anime.remove('.' + this.id);
    const animation = anime.timeline({
      easing: 'easeOutQuad',
      duration: 250
    });

    // shrink text-holder, move text-holder and dot
    animation.add({
      targets: '.' + this.id + '.text-holder, ' + '.' + this.id + '.dot',
      stroke: strokeColor,
      fill: strokeColor,
      x: this.coordinate.x - 1.5,
      y: this.coordinate.y - 1.5,
      width: 3,
      height: 3,
    });
    // Hide and move text
    animation.add({
      targets: '.' + this.id + '.text',
      opacity: 0,
      x: this.coordinate.x + 8,
      y: this.coordinate.y + 4,
    }, 0);


    // expand text-holder
    if (this.currentIndex > this.thresholdIndex) {
      setTimeout(() => {
        const textItem = document.getElementById(this.id) as unknown as SVGGraphicsElement;
        const textWidth = textItem.getBBox().width;
        animation.add({
          targets: '.' + this.id + '.text-holder',
          fill: fillColor,
          width: textWidth + this.textBuffer,
          height: 16,
          x: this.coordinate.x - 8,
          y: this.coordinate.y - 8,
        });

      // Show text
        animation.add({
          targets: '.' + this.id + '.text',
          opacity: 1,
        });
      });
    }
  }
}
