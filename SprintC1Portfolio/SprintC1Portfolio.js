// ================================================================

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

// ================================================================

let isIsogram = (str) => {
  return !str.match(/([a-z]).*\1/i);
};

// ================================================================

class BankAccount {
  constructor() {
    this._balance = 0;
    this._isOpen = false;
  }
  get balance() {
    if (!this._isOpen) {
      throw ValueError;
    }
    return this._balance;
  }
  set balance(value) {
    throw Error;
  }
  open() {
    if (this._isOpen) {
      throw ValueError;
    }
    this._isOpen = true;
  }
  close() {
    if (!this._isOpen) {
      throw ValueError;
    }
    this._isOpen = false;
    this._balance = 0;
  }
  deposit(value) {
    if (!this._isOpen) {
      throw ValueError;
    }
    if (value < 0) {
      throw ValueError;
    }
    this._balance = this._balance + value;
  }
  withdraw(value) {
    if (!this._isOpen) {
      throw ValueError;
    }
    if (this._balance < value) {
      throw ValueError;
    }
    if (value < 0) {
      throw ValueError;
    }
    this._balance = this._balance - value;
  }
}

class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}

// ================================================================

const jsInsert = document.querySelector("#jsInsert");

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

  Checkout() {
    const quantities = [1, 2, 3, 4, 5];
    let food = this.items[Math.floor(Math.random() * this.items.length)];
    let quant = quantities[Math.floor(Math.random() * quantities.length)];
    let total1 = (quant * food.Price).toFixed(2);
    const content = `
      <div>
          <h4>Checkout</h4>
          <ul>
              <li>Item: <b>${food.Name}</b></li>
              <li>Quality: <b>${food.Quality}</b></li>
              <li>Price: <b>$${food.Price}</b></li>
              <li>Quantity: <b>${quant}</b></li>
              <li id="totalA">Total: <b>$${total1}</b></li>
          </ul>
      </div>
      <div class="hidden totalCheck" disabled hidden>${total1}</div>
      `;
    jsInsert.innerHTML = content; 
  }

  // Wanted to make an override function of the normal Checkout, but couldn't get to work
  CheckoutTest(food, quant) {
    let total = (quant * food.Price).toFixed(2);
    return total;
  }


};

class Fruit {
  constructor(name, quality, price) {
    this.Name = name;
    this.Quality = quality;
    this.Price = price;
  };
};

// Instantiation
const store = new Store('KlerntMart', true);
store.AddItem(new Fruit("Bananas", "Fresh", 3.42));
store.AddItem(new Fruit("Strawberries", "Non-GMO", 5.25));
store.AddItem(new Fruit("Grapes", "Organic", 2.83));
store.Checkout();

// ================================================================

const account = new BankAccount();
account.open();
account.deposit(100);

const bankBalance = document.querySelector("#bankBalance");
bankBalance.textContent = account.balance.toFixed(2) + "$";

const bankAddBtn = document.querySelector(".bankAdd");
bankAddBtn.addEventListener('click', () => {
  try {
    account.deposit(10);
    bankBalance.textContent = account.balance.toFixed(2) + "$";
  }
  catch(err) {
    alert(`${err}`);
  }
})

const bankRemoveBtn = document.querySelector(".bankRemove");
bankRemoveBtn.addEventListener('click', () => {
  try {
    account.withdraw(10);
  bankBalance.textContent = account.balance.toFixed(2) + "$";
  }
  catch(err) {
    alert(`${err}`);
  }
})

// Add checkout button functionality
const btn = document.querySelector(".refreshFruit");
if (btn != null) {
  btn.addEventListener("click", () => {
    try {
      let totalCheck = document.querySelector(".totalCheck").textContent;
      if (account.balance >= totalCheck) {
        account.withdraw(totalCheck);
        bankBalance.textContent = account.balance.toFixed(2) + "$";

        store.Checkout();
        alert(`Checkout Succeeded! 
        Balance: -${totalCheck}$`);
      }
      else {
        alert(`Insufficient Funds!`);
      } 
    }
    catch(err) {
      alert(`${err}`);
    }
       
  });
};




const phoneNumBtn = document.querySelector(".phoneNumBtn");

phoneNumBtn.addEventListener("click", () => { 
  let phoneNum = document.querySelector(".phoneNum").value;
  try {
    let cleaned = clean(phoneNum);
    alert(`Success!
    Phone number stored: ${cleaned}`);
  }
  catch(err) {
    alert(`${err}`);
  }

});

const isoSpan = document.querySelector("#isoSpan");
store.items.forEach(x => { 

  if (isIsogram(x.Name)) {
    isoSpan.textContent += x.Name + " ";
  }
  
});



