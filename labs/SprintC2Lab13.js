class Size {
  constructor(width, height) {
    this.width = width || 80;
    this.height = height || 60;
  }
  resize(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Position {
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;

    if (x < 0 || y < 0) {
      this.x = 0;
      this.y = 0;
    }
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

class ProgramWindow {
  constructor() {
    this.size = new Size();
    this.position = new Position();
    this.screenSize = new Size(800,600);
  }
  resize(size) {
    if (size.width < 1 || size.height < 1) {
      this.size = new Size(1,1);
    }
    else if (this.position.x + size.width > this.screenSize.width || this.position.y + size.height > this.screenSize.height) {
      let width = this.screenSize.width - this.position.x;
      let height = this.screenSize.height - this.position.y;
      this.size = new Size(width, height);
    }
    else {
      this.size = size;
    }
  }
  move(position) {
    if (position.height < 1 || position.width < 1) {
      this.position = new Position(1,1);
    }
    else if (position.x + this.size.width > this.screenSize.width || position.y + this.size.height > this.screenSize.height) {
      let x = this.screenSize.width - this.size.width;
      let y = this.screenSize.height - this.size.height;
      this.position = new Position(x, y);
    }
    else {
      this.position = position;
    }
  }
}

let changeWindow = (window) => {
  window.size = new Size(400,300);
  window.position = new Position(100,150);
  return window;
}

  