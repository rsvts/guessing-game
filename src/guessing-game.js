class GuessingGame {

    constructor() {

        this.start = 0;
        this.end = 0;
        this.pointer = null;
    }

    setRange(min, max) {

        this.start = min;
        this.end = max;
    }

    guess() {

        return this.pointer = Math.round((this.start + this.end) / 2);
    }

    lower() {

        this.end = this.pointer;
    }

    greater() {

        this.start = this.pointer;
    }

}

module.exports = GuessingGame;