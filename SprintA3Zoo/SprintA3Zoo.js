class Zoo {
  constructor(name, capacity, numberOfGuests) {
    this.name = name;
    this.capacity = capacity;
    this.numberOfGuests = numberOfGuests;
    this.animalArray = [];
  }
}

class Animal {
  constructor(name, type, age, gender, weight) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.weight = weight;
    this.gender = gender;

    // Hardcoded values.
    this.baby = null;
    this.isPregnant = false;
    this.moveDistance = 10;
  }
}

let zoo = new Zoo("TimberWolf Sanctuary", 35, 10);

function PopulateZoo() {
  const content = `
  <ul>
    <li>Name: <b>${zoo.name}</b></li>
    <li>Capacity: <b>${zoo.capacity}</b></li>
    <li>NumberOfGuests: <b>${zoo.numberOfGuests}</b></li>
    <li>NumberOfAnimals: <b>${zoo.animalArray.length}</b></li>
  </ul>
  `;
  const div = document.getElementById("zooDiv");
  div.innerHTML = content;
}
PopulateZoo();

// GET request to the API for animal data.
function GetAnimal() {
  // Clear list
  const list = document.getElementById("animalDiv");
  list.innerHTML = '';

  let request = new XMLHttpRequest();
  request.open("GET", "https://cswd2azoo2022.azurewebsites.net/animals", true);
  request.onload = function () {
    let animals = JSON.parse(this.response);
    animals.forEach((animal) => {
      const content = `
        <div class="animal-card">
          <h4>${animal.name} the ${animal.type}</h4>
          <ul>
            <li>Age: ${animal.age}</li>
            <li>Weight: ${animal.weight}</li>
            <li>Gender: ${animal.gender}</li>
            <li>isPregnant: ${animal.isPregnant}</li>
          </ul>
        </div>
        `;
      list.innerHTML += content;
    });
  };
  request.send();
}
GetAnimal();






// Validate form input with RegEx
const form = document.querySelector("form");
const btn = document.querySelector(".addBtn");
const clear = document.querySelector(".clearBtn");

// Form inputs
let formName = document.querySelector('input[name="animalName"]');
let formType = document.querySelector('input[name="animalType"]');
let formAge = document.querySelector('input[name="animalAge"]');
let formWeight = document.querySelector('input[name="animalWeight"]');
let formGender = document.querySelector('input[name="animalGender"]');
let formPregnant = document.querySelector('input[name="animalPregnant"]');

// Error message handling
let ul = document.querySelector("#errors");
let nameError = document.querySelector("#name");
let typeError = document.querySelector("#type");
let ageError = document.querySelector("#age");
let weightError = document.querySelector("#weight");
let genderError = document.querySelector("#gender");
let pregError = document.querySelector("#preg");
const displayError = (element, message) => {
  element.innerHTML = message;
  element.style.position = "relative";
  element.style.display = "block";
};
const removeError = (element) => {
  element.innerHTML = "";
  element.style.position = "absolute";
  element.style.display = "none";
};
const clearForm = () => { 
  removeError(nameError);
  formName.style.background = 'none';
  removeError(typeError);
  typeError.style.background = 'none';
  removeError(ageError);
  ageError.style.background = 'none';
  removeError(weightError);
  weightError.style.background = 'none';
  removeError(genderError);
  genderError.style.background = 'none';
  removeError(pregError);
  pregError.style.background = 'none';
};
  
// Validate name
const validName = () => {
  let reg = new RegExp("[a-zA-Z0-9]+");
  if (reg.test(formName.value)) {
    formName.style.background = "HoneyDew";
    removeError(nameError);
    return true;
  } else {
    formName.style.background = "pink";
    displayError(nameError, "Animal Name is required!");
    return false;
  }
};

// Validate type
const validType = () => {
  let reg = new RegExp("[a-zA-Z0-9]+");
  if (reg.test(formType.value)) {
    formType.style.background = "HoneyDew";
    removeError(typeError);
    return true;
  } else {
    formType.style.background = "pink";
    displayError(typeError, "Animal Type is required!");
    return false;
  }
};

// Validate age
const validAge = () => {
  let reg = new RegExp("^([0-9][0-9]{0,2})$");
  if (reg.test(formAge.value)) {
    formAge.style.background = "HoneyDew";
    removeError(ageError);
    return true;
  } else {
    formAge.style.background = "pink";
    displayError(ageError, "Animal Age cannot be over 999 or under 0!");
    return false;
  }
};

// Validate weight
const validWeight = () => {
  // attempt to allow decimals, was problematic new RegExp("^([0-9]([0-9]{0,3}))|(\.[0-9]{0,2})$")
  let reg = new RegExp("^([0-9][0-9]{0,3})$");
  if (reg.test(formWeight.value)) {
    formWeight.style.background = "HoneyDew";
    removeError(weightError);
    return true;
  } else {
    formWeight.style.background = "pink";
    displayError(weightError, "Animal Weight cannot be over 9999 or under 0!");
    return false;
  }
};

// Validate gender
const validGender = () => {
  let reg = new RegExp("^(?:m|M|male|Male|f|F|female|Female)$");
  if (reg.test(formGender.value)) {
    formGender.style.background = "HoneyDew";
    removeError(genderError);
    return true;
  } else {
    formGender.style.background = "pink";
    displayError(genderError, "Animal Gender must be Male or Female!");
    return false;
  }
};

function validateForm() {
  let valid = false;

  formName.addEventListener("change", validName);
  formType.addEventListener("change", validType);
  formAge.addEventListener("change", validAge);
  formWeight.addEventListener("change", validWeight);
  formGender.addEventListener("change", validGender);

  if (validName() && validType() && validAge() && validWeight() && validGender() ) {
    valid = true;
  } else {
    valid = false;
  }
  console.log(validName())

  return valid;
}
form.addEventListener("change", validateForm);

// POST request to the API for animal data.
function AddAnimal(e) {
  e.preventDefault();
  let valid = validateForm();

  if (valid) {
    let animal = new Object({
      name: `${formName.value}`,
      type: `${formType.value}`,
      age: Number(formAge.value),
      weight: Number(formWeight.value),
      gender: `${formGender.value}`,
      isPregnant: Boolean(formPregnant.checked),
    });

    let json_animal = JSON.stringify(animal);

    let request = new XMLHttpRequest();
    request.open(
      "POST",
      "https://cswd2azoo2022.azurewebsites.net/animals",
      true
    );
    request.setRequestHeader("Content-type", "application/json");

    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        alert(request.responseText);
      }
      if (request.status != 200) {
        alert(request.responseText);
      }
    }
    if (request.send(json_animal)) {
      console.log("Animal was added!");
      GetAnimal();
    }
  } else {
    console.log("Add animal failed!");
  }
}
btn.addEventListener("click", AddAnimal);
clear.addEventListener("click", clearForm);
