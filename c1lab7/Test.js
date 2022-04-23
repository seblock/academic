describe("Exercise - Perfect Numbers", () => {
  describe("Invalid Inputs", () => {
    it("Zero is rejected (not a natural number)", () => {
      expect(() => classify(0)).toThrow(
        new Error("Classification is only possible for natural numbers.")
      );
    });
    it("Negative integer is rejected (not a natural number)", () => {
      expect(() => classify(-1)).toThrow(
        new Error("Classification is only possible for natural numbers.")
      );
    });
  });
  describe("Perfect Numbers", () => {
    it("Smallest perfect number is classified correctly", () => {
      expect(classify(6)).toEqual("perfect");
    });
    it("Medium perfect number is classified correctly", () => {
      expect(classify(28)).toEqual("perfect");
    });
    it("Large perfect number is classified correctly", () => {
      expect(classify(33550336)).toEqual("perfect");
    });
  });
  describe("Abundant Numbers", () => {
    it("Smallest abundant number is classified correctly", () => {
      expect(classify(12)).toEqual("abundant");
    });
    it("Medium abundant number is classified correctly", () => {
      expect(classify(30)).toEqual("abundant");
    });
    it("Large abundant number is classified correctly", () => {
      expect(classify(33550335)).toEqual("abundant");
    });
  });
  describe("Deficient Numbers", () => {
    it("Edge case (no factors other than itself) is classified correctly", () => {
      expect(classify(1)).toEqual("deficient");
    });
    it("Smallest prime deficient number is classified correctly", () => {
      expect(classify(2)).toEqual("deficient");
    });
    it("Smallest non-prime deficient number is classified correctly", () => {
      expect(classify(4)).toEqual("deficient");
    });
    it("Medium deficient number is classified correctly", () => {
      expect(classify(32)).toEqual("deficient");
    });
    it("Large deficient number is classified correctly", () => {
      expect(classify(33550337)).toEqual("deficient");
    });
  });
});
