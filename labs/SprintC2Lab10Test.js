describe("ResistorColor", () => {
  describe("Color codes", () => {
    it("Black", () => {
      expect(colorCode("black")).toEqual(0);
    });
    it("White", () => {
      expect(colorCode("white")).toEqual(9);
    });
    it("Orange", () => {
      expect(colorCode("orange")).toEqual(3);
    });
  });
  it("Colors", () => {
    expect(COLORS).toEqual([
      "black",
      "brown",
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "violet",
      "grey",
      "white",
    ]);
  });
});
