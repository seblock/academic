describe("Acronyms are produced from", () => {
  // basic
  it("title cased phrases", () => {
    expect(parse("Portable Network Graphics")).toEqual("PNG");
  });
  // lowercase words
  it("other title cased phrases", () => {
    expect(parse("Ruby on Rails")).toEqual("ROR");
  });
  // punctuation
  it("phrases with punctuation", () => {
    expect(parse("First In, First Out")).toEqual("FIFO");
  });
  // all caps word
  it("phrases with all uppercase words", () => {
    expect(parse("GNU Image Manipulation Program")).toEqual("GIMP");
  });
  // punctuation without whitespace
  it("phrases with punctuation without whitespace", () => {
    expect(parse("Complementary metal-oxide semiconductor")).toEqual("CMOS");
  });
  // very long abbreviation
  it("long phrases", () => {
    expect(
      parse(
        "Rolling On The Floor Laughing So Hard That My Dogs Came Over And Licked Me"
      )
    ).toEqual("ROTFLSHTMDCOALM");
  });
  // consecutive delimiters
  it("phrases with consecutive delimiters", () => {
    expect(parse("Something - I made up from thin air")).toEqual("SIMUFTA");
  });
  // apostrophes
  it("phrases with apostrophes", () => {
    expect(parse("Halley's Comet")).toEqual("HC");
  });
  // underscore emphasis
  it("phrases with underscore emphasis", () => {
    expect(parse("The Road _Not_ Taken")).toEqual("TRNT");
  });
});
