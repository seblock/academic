class Triangle {
  constructor(side1, side2, side3) {
    this.s1 = side1;
    this.s2 = side2;
    this.s3 = side3;
  }
  get isEquilateral() {
    let result = false;
    result = (this.s1 === this.s2 && this.s2 === this.s3) ? true : false;

    if (this.s1 === 0 && this.s2 === 0 && this.s3 === 0) {
      result = false;
    }
    if (this.s1 + this.s2 < this.s3) {
      result = false;
    }
    if (this.s1 + this.s3 < this.s2) {
      result = false;
    }
    if (this.s2 + this.s3 < this.s1) {
      result = false;
    }

    return result;
  }
  get isIsosceles() {
    let result = false;
    result = (this.s1 === this.s2 || this.s2 === this.s3 || this.s1 === this.s3) ? true : false;

    if (this.s1 + this.s2 < this.s3) {
      result = false;
    }
    if (this.s1 + this.s3 < this.s2) {
      result = false;
    }
    if (this.s2 + this.s3 < this.s1) {
      result = false;
    }
    
    return result;
  }
  get isScalene() {
    let result = false;
    result = (this.s1 != this.s2 && this.s2 != this.s3) ? true : false;

    if (this.s1 + this.s2 < this.s3) {
      result = false;
    }
    if (this.s1 + this.s3 < this.s2) {
      result = false;
    }
    if (this.s2 + this.s3 < this.s1) {
      result = false;
    }

    return result;
  }
}

// ================================================================

let reverseString = (string) => {
  return string.split("").reverse().join("");
};

// ================================================================

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

// ================================================================



class Store {
  constructor(name, isOpen) {
    this.Name = name;
    this.isOpen = isOpen;
    this.items = [];
  };

  AddItem(item) {
    this.items.push(item);
  };

  UpdateItem(index, newItem) {
    this.items[index] = newItem;
  };

  RemoveItem(index) {
    return this.items.splice(index, 1);
  }

  Display() {
    const jsInsert = document.querySelector("#jsInsert");
    const content = `
      <div>
        <h1 class="text-center">Welcome to ${this.Name}!</h1>
        <h3 class="text-center">We are currently ${this.isOpen ? "OPEN": "CLOSED"}</h3>
      </div>
      <hr>
      <div>
          <h4 class="text-center">Browse Items</h4>
          <div id="itemsList" class="d-flex flex-row" >
          </div>
      </div>
      <hr>
      `;
    jsInsert.innerHTML = content;
    
    this.items.forEach(item => {
      const list = document.querySelector("#itemsList");
      const itemInfo = `
      <p>Name: <b>${item.Name}</b></p>
      <p>Description: <b>${item.Description}</b></p>
      <p>Price: <b>$${item.Price}</b></p>
      <p>Stock: <b>${item.Stock}</b></p>
      `;
      const div = document.createElement("div");
      div.classList.add("card");
      div.classList.add("m-1");
      div.classList.add("p-2");
      div.classList.add("text-center");
      div.classList.add("test");
      div.innerHTML = itemInfo;
      list.append(div);
    });
  }
};

class Fruit {
  constructor(name, desc, price, stock) {
    this.Name = name;
    this.Description = desc;
    this.Price = price;
    this.Stock = stock;
  };
};

// Instantiation
const store = new Store('KlerntMart', true);
store.AddItem(new Fruit("Bananas", "A bundle of 5-7 medium sized, ripe bananas.",3.42, 20));
store.AddItem(new Fruit("Strawberries", "A bunnet of around 24 fresh strawberries.",5.25, 40));
store.AddItem(new Fruit("Grapes", "Three or more fresh grape clusters in a bag.", 2.83, 60));
store.Display();

// ================================================================

const jsLabs = document.querySelector("#jsLabs");

const triangle = new Triangle(store.items[0].stock, store.items[1].stock, store.items[2].stock);
const triangleResult = (triangle.isEquilateral) ? "Equilateral" : "Not Equilateral";

const Bbackwards = reverseString(store.items[0].Name);

const content = `
  <div>
    <h2 class="text-center">Frequently Asked Questions</h2>
      <h5 class="text-center"><b>Q:</b> If you stacked all of the fruit together, what kind of triangle would they make?</h5>
      <h5 class="text-center"><b>A:</b> ${triangleResult}</h5>

      <h5 class="text-center"><b>Q:</b> What is \"Bananas\" spelled backwards?</h5>
      <h5 class="text-center"><b>A:</b> ${Bbackwards}</h5>

      <h5 class="text-center"><b>Q:</b> If I had two bananas and gave one to my friend Sally, how many would I have?</h5>
      <h5 class="text-center"><b>A:</b> ${twoFer("Sally")}</h5>
  </div>
  `;
jsLabs.innerHTML = content;


