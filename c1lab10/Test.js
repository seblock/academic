describe("countWords", () => {
  it("count one word", () => {
    const expectedCounts = { word: 1 };
    expect(countWords("word")).toEqual(expectedCounts);
  });
  it("count one of each word", () => {
    const expectedCounts = { one: 1, of: 1, each: 1 };
    expect(countWords("one of each")).toEqual(expectedCounts);
  });
  it("multiple occurrences of a word", () => {
    const expectedCounts = {
      one: 1,
      fish: 4,
      two: 1,
      red: 1,
      blue: 1,
    };
    expect(countWords("one fish two fish red fish blue fish")).toEqual(
      expectedCounts
    );
  });
  it("handles cramped lists", () => {
    const expectedCounts = {
      one: 1,
      two: 1,
      three: 1,
    };
    expect(countWords("one,two,three")).toEqual(expectedCounts);
  });
  it("handles expanded lists", () => {
    const expectedCounts = {
      one: 1,
      two: 1,
      three: 1,
    };
    expect(countWords("one,\ntwo,\nthree")).toEqual(expectedCounts);
  });
  it("ignore punctuation", () => {
    const expectedCounts = {
      car: 1,
      carpet: 1,
      as: 1,
      java: 1,
      javascript: 1,
    };
    expect(countWords("car: carpet as java: javascript!!&@$%^&")).toEqual(
      expectedCounts
    );
  });
  it("include numbers", () => {
    const expectedCounts = {
      iting: 2,
      1: 1,
      2: 1,
    };
    expect(countWords("iting, 1, 2 iting")).toEqual(expectedCounts);
  });
  it("normalize case", () => {
    const expectedCounts = {
      go: 3,
      stop: 2,
    };
    expect(countWords("go Go GO Stop stop")).toEqual(expectedCounts);
  });
  it("with apostrophes", () => {
    const expectedCounts = {
      first: 1,
      "don't": 2,
      laugh: 1,
      then: 1,
      cry: 1,
    };
    expect(countWords("First: don't laugh. Then: don't cry.")).toEqual(
      expectedCounts
    );
  });
  it("with quotations", () => {
    const expectedCounts = {
      joe: 1,
      "can't": 1,
      tell: 1,
      between: 1,
      large: 2,
      and: 1,
    };
    expect(countWords("Joe can't tell between 'large' and large.")).toEqual(
      expectedCounts
    );
  });
  it("substrings from the beginning", () => {
    const expectedCounts = {
      joe: 1,
      "can't": 1,
      tell: 1,
      between: 1,
      app: 1,
      apple: 1,
      and: 1,
      a: 1,
    };
    expect(countWords("Joe can't tell between app, apple and a.")).toEqual(
      expectedCounts
    );
  });
  it("multiple spaces not detected as a word", () => {
    const expectedCounts = {
      multiple: 1,
      whitespaces: 1,
    };
    expect(countWords(" multiple   whitespaces")).toEqual(expectedCounts);
  });
  it("alternating word separators not detected as a word", () => {
    const expectedCounts = {
      one: 1,
      two: 1,
      three: 1,
    };
    expect(countWords(",\n,one,\n ,two \n 'three'")).toEqual(expectedCounts);
  });
});
