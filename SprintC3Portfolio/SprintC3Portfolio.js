let buildSign = (occasion, name) => {
  return `Happy ${occasion} ${name}!`;
};
let buildBirthdaySign = (age) => {
  let result = age >= 50 ? "mature" : "young";
  return `Happy Birthday! What a ${result} fellow you are.`;
};
let graduationFor = (name, year) => {
  return `Congratulations ${name}!\nClass of ${year}`;
};
let costOf = (sign, currency) => {
  let total = String(sign).length * 2 + 20;
  return `Your sign costs ${total}.00 ${currency}.`;
};

// ================================================================

let seeingDouble = (deck) => {
  return deck.map((x) => {
    return x * 2;
  });
};

let threeOfEachThree = (deck) => {
  let result = [];
  deck.forEach((x) => {
    result.push(x);
    if (x == 3) {
      result.push(3);
      result.push(3);
    }
  });
  return result;
};

let middleTwo = (deck) => {
  let middle = Math.floor(deck.length / 2 - 1);
  return deck.splice(middle, 2);
};

let sandwichTrick = (deck) => {
  let l = deck.shift();
  let r = deck.pop();
  let middle = Math.floor(deck.length / 2);
  deck.splice(middle, 0, r, l);
  return deck;
};

let twoIsSpecial = (deck) => {
  let result = [];
  deck.forEach((x) => {
    if (x == 2) {
      result.push(x);
    }
  });
  return result;
};

let perfectlyOrdered = (deck) => {
  return deck.sort(function (a, b) {
    return a - b;
  });
};

let reorder = (deck) => {
  return deck.reverse();
};

// ================================================================

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

  layers.forEach((x) => {
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
  for (let key in result) {
    if (typeof result[key] == "number") {
      result[key] *= single;
    }
  }
  return result;
};

// ================================================================

class Store {
  constructor(name, isOpen) {
    this.Name = name;
    this.isOpen = isOpen;
    this.items = [];
  }

  AddItem(item) {
    this.items.push(item);
  }

  UpdateItem(index, newItem) {
    this.items[index] = newItem;
  }

  RemoveItem(index) {
    return this.items.splice(index, 1);
  }

  Display() {
    const jsInsert = document.querySelector("#jsInsert");
    const content = `
      <div>
        <h1 class="text-center">Welcome to ${this.Name}!</h1>
        <h3 class="text-center">We are currently ${
          this.isOpen ? "OPEN" : "CLOSED"
        }</h3>
      </div>
      <hr>
      `;
    jsInsert.innerHTML = content;
  }
}

// Instantiation
const store = new Store("Timberwolf Mall", true);
store.Display();

// ================================================================

const signForm = document.querySelector("#signForm");
signForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("nameSign").value;
  if (name.length < 1) {
    name = "[name]";
  }
  let occ = document.getElementById("occSign").value;
  if (occ.length < 1) {
    occ = "[occasion]";
  }
  const signInner = document.querySelector(".signInner");
  signInner.textContent = buildSign(occ, name);
  const totalCost = document.querySelector("#signCost");
  totalCost.textContent = costOf(buildSign(occ, name), "USD");
  signForm.reset();
});

const jsCards = document.querySelector("#jsCards");


let deck = [1, 2, 3, 4, 10];
const deck1 = document.querySelector("#deck1");
deck1.innerHTML = deck;
const deck2 = document.querySelector("#deck2");
deck2.innerHTML = seeingDouble(deck);

deck = [1, 2, 3, 5, 6, 10];
const deck3 = document.querySelector("#deck3");
deck3.innerHTML = deck;
const deck4 = document.querySelector("#deck4");
deck4.innerHTML = sandwichTrick(deck);

deck = [10, 1, 5, 3, 2, 8, 7];
const deck5 = document.querySelector("#deck5");
deck5.innerHTML = deck;
const deck6 = document.querySelector("#deck6");
deck6.innerHTML = perfectlyOrdered(deck);




const lasagnaForm = document.querySelector("#lasagnaForm");
lasagnaForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let recipe = {
    sauce: 0.5,
    noodles: 250,
    meat: 150,
    tomatoes: 3,
    onion: 0.5,
  }

  let size = lasagnaForm.querySelector("input[name=size]:checked").value;
  let sauce = lasagnaForm.querySelector("input[name=sauce]:checked").value;
  let noodle = lasagnaForm.querySelector("input[name=noodle]:checked").value;

  let base = [
    "sauce",
    "noodles",
    "béchamel",
    "meat",
    "mozzarella",
    "noodles",
    "ricotta",
    "eggplant",
    "béchamel",
    "noodles",
    "sauce",
    "mozzarella",
  ]

  if (sauce > 2) {
    base.push("sauce");
    recipe.sauce += 0.25;
  }
  if (sauce < 2) {
    base.splice(base.indexOf("sauce"), 1);
    recipe.sauce -= 0.25;
  }

  if (noodle > 2) {
    base.push("noodles");
    recipe.noodles += 125;
  }
  if (noodle < 2) {
    base.splice(base.indexOf("noodles"), 1);
    recipe.noodles -= 125;
  }

  let prepTime = preparationTime(base);
  const prep = document.querySelector("#prep");
  prep.textContent = prepTime + " minutes";

  let resultRecipe = scaleRecipe(recipe, size);
  let breakdown = document.querySelector("#break");
  resultRecipe = JSON.stringify(resultRecipe);
  breakdown.textContent = resultRecipe;

  signForm.reset();
});

