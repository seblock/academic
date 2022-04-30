let toRna = (string) => {
  let result = "";
  string.split("").forEach(letter => {
    if (letter === "G") {
      result += "C"
    }
    if (letter === "C") {
      result += "G"
    }
    if (letter === "T") {
      result += "A"
    }
    if (letter === "A") {
      result += "U"
    }
  });
  return result;
};