let findAnagrams = (word, arrMatch) => {
  let result = new Array();
  let wordResult = word.replace(/[^\w]/g).toLowerCase().split('').sort().join();
  arrMatch.forEach((a) => {
    let a2 = a.replace(/[^\w]/g).toLowerCase().split('').sort().join();
    if (a2 === wordResult && word.toLowerCase() != a.toLowerCase()) {
      result.push(a);
    }
  });
  return result;
};
