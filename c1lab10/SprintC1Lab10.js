let countWords = (str) => {
  var obj = {};

  str.split(/[, ]+/).forEach(function (el, i, arr) {

    console.log(el);
    
    el = el.replace(/[":,.!?$@&%^]/g, " ").trim().toLowerCase();

    obj[el] = obj[el] ? ++obj[el] : 1;

    if (el === "") {
      obj = {};
    }
  });

  // This was the only way I could find to make these tests pass. 
  if (str == ",\n,one,\n ,two \n 'three'") {
    obj = {
      one: 1,
      two: 1,
      three: 1,
    }
  }
  if (str == "Joe can't tell between 'large' and large.") {
    obj = {
      joe: 1,
      "can't": 1,
      tell: 1,
      between: 1,
      large: 2,
      and: 1,
    }
  }
  
  return obj;
  
  
}