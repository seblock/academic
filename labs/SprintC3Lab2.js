let seeingDouble = (deck) => { return deck.map((x) => { return x * 2; }); };

let threeOfEachThree = (deck) => {
  let result = [];
  deck.forEach(x => {
    result.push(x)
    if (x==3) {
      result.push(3);
      result.push(3);
    }
  });
  return result;
};

let middleTwo = (deck) => { 
  let middle = Math.floor((deck.length / 2)-1);
  return deck.splice(middle, 2);
};

let sandwichTrick = (deck) => { 
  let l = deck.shift();
  let r = deck.pop();
  let middle = Math.floor((deck.length / 2));
  deck.splice(middle, 0, r, l);
  return deck;
};

let twoIsSpecial = (deck) => { 
  let result = [];
  deck.forEach(x => {
    if (x==2) {
      result.push(x);
    }
  });
  return result;
};

let perfectlyOrdered = (deck) => { 
  return deck.sort(function (a, b) {return a - b});
};

let reorder = (deck) => { return deck.reverse(); };
