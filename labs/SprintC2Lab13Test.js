describe("Size", () => {
  it("allows to create a new instance", () => {
    const size = new Size(110, 220);
    expect(size.width).toBe(110);
    expect(size.height).toBe(220);
  });

  it("applies default values", () => {
    const size = new Size();
    expect(size.width).toBe(80);
    expect(size.height).toBe(60);
  });

  it("provides a resize method", () => {
    const size = new Size(110, 220);
    size.resize(120, 330);
    expect(size.width).toBe(120);
    expect(size.height).toBe(330);
  });
});

describe("Position", () => {
  it("allows to create a new instance", () => {
    const position = new Position(10, 20);
    expect(position.x).toBe(10);
    expect(position.y).toBe(20);
  });

  it("applies default values", () => {
    const position = new Position();
    expect(position.x).toBe(0);
    expect(position.y).toBe(0);
  });

  it("provides a move method", () => {
    const position = new Position(10, 20);
    position.move(30, 40);
    expect(position.x).toBe(30);
    expect(position.y).toBe(40);
  });
});

describe("ProgramWindow", () => {
  it("allows to create a new instance", () => {
    const window = new ProgramWindow();

    expect(window.size).toBeInstanceOf(Size);
    expect(window.position).toBeInstanceOf(Position);

    expect(window.screenSize.width).toBe(800);
    expect(window.screenSize.height).toBe(600);
    expect(window.size.width).toBe(80);
    expect(window.size.height).toBe(60);
    expect(window.position.x).toBe(0);
    expect(window.position.y).toBe(0);
  });

  it("does NOT take parameters in the constructor function", () => {
    const size = new Size(500, 400);
    const position = new Position(25, 15);
    const programWindow = new ProgramWindow(size, position);

    expect(programWindow.size.width).toBe(80);
    expect(programWindow.size.height).toBe(60);
    expect(programWindow.position.x).toBe(0);
    expect(programWindow.position.y).toBe(0);
  });

  it("provides a resize method", () => {
    const programWindow = new ProgramWindow();
    const newSize = new Size(300, 200);
    programWindow.resize(newSize);

    expect(programWindow.size.width).toBe(300);
    expect(programWindow.size.height).toBe(200);
  });

  it("does not resize below 1", () => {
    const programWindow = new ProgramWindow();
    const newSize = new Size(0, -10);
    programWindow.resize(newSize);

    expect(programWindow.size.width).toBe(1);
    expect(programWindow.size.height).toBe(1);
  });

  it("resize respects limits due to position and screen size", () => {
    const programWindow = new ProgramWindow();
    const newPosition = new Position(710, 525);
    programWindow.move(newPosition);
    const newSize = new Size(1000, 1000);
    programWindow.resize(newSize);

    expect(programWindow.size.width).toBe(90);
    expect(programWindow.size.height).toBe(75);
  });

  it("provides a move method", () => {
    const programWindow = new ProgramWindow();
    const newPosition = new Position(525, 450);
    programWindow.move(newPosition);

    expect(programWindow.position.x).toBe(525);
    expect(programWindow.position.y).toBe(450);
  });

  it("move respects the lower bound for the position", () => {
    const programWindow = new ProgramWindow();
    const newPosition = new Position(-20, -10);
    programWindow.move(newPosition);

    expect(programWindow.position.x).toBe(0);
    expect(programWindow.position.y).toBe(0);
  });

  it("move respects limits due to screen and window size", () => {
    const programWindow = new ProgramWindow();
    const newSize = new Size(100, 100);
    programWindow.resize(newSize);
    const newPosition = new Position(750, 650);
    programWindow.move(newPosition);

    expect(programWindow.position.x).toBe(700);
    expect(programWindow.position.y).toBe(500);
  });
});

describe("changeWindow", () => {
  it("resizes the window", () => {
    const programWindow = new ProgramWindow();
    const updatedWindow = changeWindow(programWindow);

    expect(updatedWindow.size.width).toBe(400);
    expect(updatedWindow.size.height).toBe(300);
  });

  it("moves the window", () => {
    const programWindow = new ProgramWindow();
    const updatedWindow = changeWindow(programWindow);

    expect(updatedWindow.position.x).toBe(100);
    expect(updatedWindow.position.y).toBe(150);
  });

  it("returns the same instance that was passed in", () => {
    const programWindow = new ProgramWindow();
    const updatedWindow = changeWindow(programWindow);

    expect(Object.is(updatedWindow, programWindow)).toBe(true);
  });
});
