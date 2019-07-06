export class Index {
    currentIndex = 0;
    numberThresholds?: [number, number, number, number, number];
    stringThresholds?: [string, string, string, string, string];

    constructor(
        thresholds: [number, number, number, number, number] | [string, string, string, string, string]) {
            if (typeof thresholds[0] === 'number') {
                this.numberThresholds = thresholds as [number, number, number, number, number];
            } else if (typeof thresholds[0] === 'string') {
                this.stringThresholds = thresholds as [string, string, string, string, string];
            }
    }

    setIndexByValue(value: number | string): boolean {
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
}
