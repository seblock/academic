let decodedValue = (colorArray) => {
  let result = "";
  colorArray.forEach(color => {
    if (color == "black") {
      result += 0;
    }
    if (color == "brown") {
      result += 1;
    }
    if (color == "red") {
      result += 2;
    }
    if (color == "orange") {
      result += 3;
    }
    if (color == "yellow") {
      result += 4;
    }
    if (color == "green") {
      result += 5;
    }
    if (color == "blue") {
      result += 6;
    }
    if (color == "violet") {
      result += 7;
    }
    if (color == "grey") {
      result += 8;
    }
    if (color == "white") {
      result += 9;
    }
  });
  if (result.length > 2) {
    result = result.slice(0, -1)
  }
  return parseInt(result);
};


