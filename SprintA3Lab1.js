const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

// function logText(e) {
//   console.log('e:', e);
//   console.log(this.classList.value);
//   e.stopPropagation(); // stop bubbling
// };

// Arrow function refers to window, not element
const logText = (e) => {
  console.log("e:", e);
  e.stopPropagation(); // stop bubbling
};

divs.forEach((div) => div.addEventListener("click", logText));

button.addEventListener(
  "click",
  () => {
    console.log("Checkout clicked");
  },
  {
    once: true,
  }
);
