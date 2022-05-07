let cookingStatus = (remainingTime) => {
  let result;
  if (remainingTime == 0) {
    result = "Lasagna is done.";
  } else {
    result = "Not done, please wait.";
  }
  if (remainingTime == null) {
    result = "You forgot to set the timer.";
  }
  return result;
};

let preparationTime = (layers, time) => {
  if (time == null) {
    return layers.length * 2;
  }
  return layers.length * time;
};

let quantities = (layers) => {
  let result = { noodles: 0, sauce: 0 };

  layers.forEach(x => {
    if (x == "noodles") {
      result.noodles += 50;
    }
    if (x == "sauce") {
      result.sauce += 0.2;
    }
  });

  return result;
};

let addSecretIngredient = (friendsList, myList) => {
  let special = friendsList.pop();
  friendsList.push(special);
  myList.push(special);
};

let scaleRecipe = (recipe, portions) => {
  let single = portions / 2;
  let result = { ...recipe };
  for(let key in result) {
    if (typeof result[key] == 'number') {
      result[key] *= single;
    }
  }
  return result;

};
