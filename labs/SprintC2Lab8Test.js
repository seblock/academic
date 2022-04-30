describe("Transcription", () => {
  it("empty rna sequence", () => {
    expect(toRna("")).toEqual("");
  });
  it("transcribes cytosine to guanine", () => {
    expect(toRna("C")).toEqual("G");
  });
  it("transcribes guanine to cytosine", () => {
    expect(toRna("G")).toEqual("C");
  });
  it("transcribes thymine to adenine", () => {
    expect(toRna("T")).toEqual("A");
  });
  it("transcribes adenine to uracil", () => {
    expect(toRna("A")).toEqual("U");
  });
  it("transcribes all dna nucleotides to their rna complements", () => {
    expect(toRna("ACGTGGTCTTAA")).toEqual("UGCACCAGAAUU");
  });
});
