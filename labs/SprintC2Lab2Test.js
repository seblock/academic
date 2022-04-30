describe("steps()", () => {
  it("zero steps for one", () => {
    expect(steps(1)).toEqual(0);
  });
  it("divide if even", () => {
    expect(steps(16)).toEqual(4);
  });
  it("even and odd steps", () => {
    expect(steps(12)).toEqual(9);
  });
  it("large number of even and odd steps", () => {
    expect(steps(1000000)).toEqual(152);
  });
  it("zero is an error", () => {
    expect(() => {
      steps(0);
    }).toThrow(new Error("Only positive numbers are allowed"));
  });
  it("negative value is an error", () => {
    expect(() => {
      steps(-15);
    }).toThrow(new Error("Only positive numbers are allowed"));
  });
});
