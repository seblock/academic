class Triangle {
  constructor(side1, side2, side3) {
    this.s1 = side1;
    this.s2 = side2;
    this.s3 = side3;
  }
  get isEquilateral() {
    let result = false;
    result = (this.s1 === this.s2 && this.s2 === this.s3) ? true : false;

    if (this.s1 === 0 && this.s2 === 0 && this.s3 === 0) {
      result = false;
    }
    if (this.s1 + this.s2 < this.s3) {
      result = false;
    }
    if (this.s1 + this.s3 < this.s2) {
      result = false;
    }
    if (this.s2 + this.s3 < this.s1) {
      result = false;
    }

    return result;
  }
  get isIsosceles() {
    let result = false;
    result = (this.s1 === this.s2 || this.s2 === this.s3 || this.s1 === this.s3) ? true : false;

    if (this.s1 + this.s2 < this.s3) {
      result = false;
    }
    if (this.s1 + this.s3 < this.s2) {
      result = false;
    }
    if (this.s2 + this.s3 < this.s1) {
      result = false;
    }
    
    return result;
  }
  get isScalene() {
    let result = false;
    result = (this.s1 != this.s2 && this.s2 != this.s3) ? true : false;

    if (this.s1 + this.s2 < this.s3) {
      result = false;
    }
    if (this.s1 + this.s3 < this.s2) {
      result = false;
    }
    if (this.s2 + this.s3 < this.s1) {
      result = false;
    }

    return result;
  }
}
