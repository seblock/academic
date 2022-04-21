let clean = (number) => { 

  let regExp = /[a-zA-Z]/g;
  if (regExp.test(number)) {
    throw new Error("Letters not permitted");
  }

  let regExp2 = /[@:!]/;
  if (regExp2.test(number)) {
    throw new Error("Punctuations not permitted");
  }

  // Remove all non-number characters and spaces
  number = number.replace(/[^\d]/g, "");
  
  if (number.split("").length <= 9) {
    throw new Error("Incorrect number of digits");
  }

  if (number.split("").length > 11 && number.split("")[0] != 1) {
    throw new Error("More than 11 digits");
  }

  if (number.split("").length == 11 && number.split("")[0] != 1) {
    throw new Error("11 digits must start with 1");
  }

  if (number.split("").length == 11 && number.split("")[0] == 1) {
    number = number.substring(1)
  }

  if (number.split("")[0] == 0) {
    throw new Error("Area code cannot start with zero");
  }

  if (number.split("")[0] == 1) {
    throw new Error("Area code cannot start with one");
  }

  if (number.split("")[3] == 0) {
    throw new Error("Exchange code cannot start with zero");
  }

  if (number.split("")[3] == 1) {
    throw new Error("Exchange code cannot start with one");
  }
  
  return number;
};
