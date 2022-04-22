describe("Isogram", () => {
  describe("Check if the given string is an isogram", () => {
    it("empty string", () => {
      expect(isIsogram("")).toEqual(true);
    });
    it("isogram with only lower case characters", () => {
      expect(isIsogram("isogram")).toEqual(true);
    });
    it("word with one duplicated character", () => {
      expect(isIsogram("eleven")).toEqual(false);
    });
    it("word with one duplicated character from the end of the alphabet", () => {
      expect(isIsogram("zzyzx")).toEqual(false);
    });
    it("longest reported english isogram", () => {
      expect(isIsogram("subdermatoglyphic")).toEqual(true);
    });
    it("word with duplicated character in mixed case", () => {
      expect(isIsogram("Alphabet")).toEqual(false);
    });
    it("word with duplicated character in mixed case, lowercase first", () => {
      expect(isIsogram("alphAbet")).toEqual(false);
    });
    it("hypothetical isogrammic word with hyphen", () => {
      expect(isIsogram("thumbscrew-japingly")).toEqual(true);
    });
    it("hypothetical word with duplicated character following hyphen", () => {
      expect(isIsogram("thumbscrew-jappingly")).toEqual(false);
    });
    it("isogram with duplicated hyphen", () => {
      expect(isIsogram("six-year-old")).toEqual(true);
    });
    it("made-up name that is an isogram", () => {
      expect(isIsogram("Emily Jung Schwartzkopf")).toEqual(true);
    });
    it("duplicated character in the middle", () => {
      expect(isIsogram("accentor")).toEqual(false);
    });
    it("same first and last characters", () => {
      expect(isIsogram("angola")).toEqual(false);
    });
  });
});
