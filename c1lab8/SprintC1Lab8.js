class Squares {
  constructor(num) {
    this.num = num;
    this.x = 0;
    this.y = 0;
    this.i = 0;
    this.j = 0;
  }
  get sumOfSquares() {
    while (this.i <= this.num) {
      this.x += Math.pow(this.i, 2);
      this.i++;
   }
   return this.x;
  }
  get squareOfSum() {
    while (this.j <= this.num) {
      this.y += this.j;
      this.j++;
    }
    this.y = Math.pow(this.y, 2);
   return this.y;
  }
  get difference() {
    return Math.abs(this.squareOfSum-this.sumOfSquares);
  }
}
