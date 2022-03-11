const jsAbove = document.querySelector("#jsAbove");
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
      `;
    if (jsAbove != null) { jsInsert.innerHTML = content; }
  }

  // Wanted to make an override function of the normal Checkout, but couldn't get to work
  CheckoutTest(food, quant) {
    let total = (quant * food.Price).toFixed(2);
    return total;
  }

  PopulateStoreFront() {
    if (jsAbove != null) {
      const content = `<h4>Available</h4>`;
      jsAbove.innerHTML += content;
  
      this.items.forEach((food) => {
        const content = `
        <div>
            <h6>${food.Name}</h6>
            <ul>
                <li>Quality: <b>${food.Quality}</b></li>
                <li>Price: <b>$${food.Price}</b></li>
            </ul>
          </div>
        `;
        jsAbove.innerHTML += content;
      });
    }
  };
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
store.PopulateStoreFront();
store.Checkout();

// Add checkout button functionality
const btn = document.querySelector(".refreshFruit");
if (btn != null) {
    btn.addEventListener("click", () => {
      store.Checkout();
  });
};

