class Fruit {
  constructor(name, quality, price) {
    this.Name = name;
    this.Quality = quality;
    this.Price = price;
  }
};

let foods = [
  new Fruit("Bananas", "Fresh", 3.42),
  new Fruit("Strawberries", "Non-GMO", 3.42),
  new Fruit("Grapes", "Organic", 3.42),
];

let quantities = [1, 2, 3, 4, 5];

document.querySelector("#beforeText").textContent = "JavaScript starts NOW!";

document.querySelector("#beforeText").classList.add("randomClass");

document.querySelector("#beforeText").style.display = "block";

document.querySelector("#beforeText").style.display = "none";

function Random(foods, quantities) {
  let food = foods[Math.floor(Math.random() * foods.length)];
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
  document.querySelector("#jsinsert").innerHTML = content;
}

Random(foods, quantities);

let btn = document.querySelector(".refreshFruit");

btn.addEventListener("click", function () {
  Random(foods, quantities);
});

// function PopulateFoods() {
//   const content = `<h4>Available</h4>`;
//   document.querySelector("#jsAbove").innerHTML += content;
  
//   let foodss = foods;
//   foodss.forEach(food => {
//     const content = `
//     <div>
//         <h6>${food.Name}</h6>
//         <ul>
//             <li>Quality: <b>${food.Quality}</b></li>
//             <li>Price: <b>$${food.Price}</b></li>
//         </ul>
//       </div>
//     `;
//   document.querySelector("#jsAbove").innerHTML += content;
//   });

//   const content2 = `<hr>`;
//   document.querySelector("#jsAbove").innerHTML += content2;
// }
// PopulateFoods();

