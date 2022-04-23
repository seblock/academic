describe("difference-of-squares", () => {
  let squares1,squares5,squares100;
  
  beforeEach(() => {
    squares1 = new Squares(1);
    squares5 = new Squares(5);
    squares100 = new Squares(100)
  });

  describe("Square the sum of the numbers up to the given number", () => {
    it("square of sum 1", () => {
      expect(squares1.squareOfSum).toBe(1);
    });
    it("square of sum 5", () => {
      expect(squares5.squareOfSum).toBe(225);
    });
    it("square of sum 100", () => {
      expect(squares100.squareOfSum).toBe(25502500);
    });
  });
  describe("Sum the squares of the numbers up to the given number", () => {
    it("sum of squares 1", () => {
      expect(squares1.sumOfSquares).toBe(1);
    });
    it("sum of squares 5", () => {
      expect(squares5.sumOfSquares).toBe(55);
    });
    it("sum of squares 100", () => {
      expect(squares100.sumOfSquares).toBe(338350);
    });
  });
  describe("Subtract sum of squares from square of sums", () => {
    it("difference of squares 1", () => {
      expect(squares1.difference).toBe(0);
    });
    it("difference of squares 5", () => {
      expect(squares5.difference).toBe(170);
    });
    it("difference of squares 100", () => {
      expect(squares100.difference).toBe(25164150);
    });
  });
});
