let twoFer = (string) => {
  let result = "";

  if (string == "" ||  string == null) {
    result = "One for you, one for me.";
  }
  else {
    result = `One for ${string}, one for me.`
  }
  
  return result;
};


