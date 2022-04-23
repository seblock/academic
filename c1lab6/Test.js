describe("Anagram", () => {
  it("no matches", () => {
    expect(
      findAnagrams("diaper", ["hello", "world", "zombies", "pants"])
    ).toEqual([]);
  });
  it("detects two anagrams", () => {
    expect(findAnagrams("master", ["stream", "pigeon", "maters"])).toEqual([
      "stream",
      "maters",
    ]);
  });
  it("does not detect anagram subsets", () => {
    expect(findAnagrams("good", ["dog", "goody"])).toEqual([]);
  });
  it("detects anagram", () => {
    expect(
      findAnagrams("listen", ["enlists", "google", "inlets", "banana"])
    ).toEqual(["inlets"]);
  });
  it("detects three anagrams", () => {
    expect(
      findAnagrams("allergy", [
        "gallery",
        "ballerina",
        "regally",
        "clergy",
        "largely",
        "leading",
      ])
    ).toEqual(["gallery", "regally", "largely"]);
  });
  it("detects multiple anagrams with different case", () => {
    expect(findAnagrams("nose", ["Eons", "ONES"])).toEqual(["Eons", "ONES"]);
  });
  it("does not detect non-anagrams with identical checksum", () => {
    expect(findAnagrams("mass", ["last"])).toEqual([]);
  });
  it("detects anagrams case-insensitively", () => {
    expect(
      findAnagrams("Orchestra", ["cashregister", "Carthorse", "radishes"])
    ).toEqual(["Carthorse"]);
  });
  it("detects anagrams using case-insensitive subject", () => {
    expect(
      findAnagrams("Orchestra", ["cashregister", "carthorse", "radishes"])
    ).toEqual(["carthorse"]);
  });
  it("detects anagrams using case-insensitive possible matches", () => {
    expect(
      findAnagrams("orchestra", ["cashregister", "Carthorse", "radishes"])
    ).toEqual(["Carthorse"]);
  });
  it("does not detect an anagram if the original word is repeated", () => {
    expect(findAnagrams("go", ["go Go GO"])).toEqual([]);
  });
  it("anagrams must use all letters exactly once", () => {
    expect(findAnagrams("tapper", ["patter"])).toEqual([]);
  });
  it("words are not anagrams of themselves (case-insensitive)", () => {
    expect(findAnagrams("BANANA", ["BANANA", "Banana", "banana"])).toEqual([]);
  });
  it("words other than themselves can be anagrams", () => {
    expect(findAnagrams("LISTEN", ["Listen", "Silent", "LISTEN"])).toEqual([
      "Silent",
    ]);
  });
});
