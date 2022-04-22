class HighScores {
  constructor(arr) {
    this.arr = arr;
  }
  get scores() {
    return this.arr;
  }
  get personalBest() {
    return Math.max(...this.arr);
  }
  get lait() {
    return Math.min.apply(null, this.arr.filter(Boolean));
  }
  get personalTopThree() {
    return this.arr.sort(function(a, b){return b - a}).slice(0, 3);
  }
}


