class Zoo {
  constructor(name, capacity, numberOfGuests) {
    this.name = name;
    this.capacity = capacity;
    this.numberOfGuests = numberOfGuests;
    this.animalArray = [];
  }

  FindAnimalByName(animalName, type) {
    let result = null;

    for (let i = 0; i < this.animalArray.length; i++) {
      if (this.animalArray[i].name === animalName) {
        if (type == "index") {
          result = i;
        }
        if (type == "animal") {
          result = this.animalArray[i];
        }

        break;
      }
    }
    return result;
  }

  // Takes full animal object
  AddAnimal(animal) {
    this.animalArray.push(animal);
  }

  // Takes index
  RemoveAnimal(animal) {
    console.log(`${this.animalArray[animal].name} has been removed!`);
    return this.animalArray.splice(animal, 1);
  }

  // Takes index and then animal
  UpdateAnimal(animalOLD, animalNEW) {
    // A completely new animal object has to be created so that animal type may be changed.
    this.animalArray[animalOLD] = animalNEW;
    let indexNew = this.FindAnimalByName(animalNEW.name, "index");
    console.log(`${this.animalArray[indexNew].name} has been updated!`);
  }

  AdmitGuest() {
    this.numberOfGuests++;
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

  Move() {
    console.log(`${this.name} is moving!`);
  }

  MakePregnant() {
    if (this.gender === Gender.Female && !this.isPregnant) {
      this.isPregnant = true;

      if (this.isPregnant === true) {
        let baby = null;

        // Randomizes newborn gender
        let random = Math.floor(Math.random(0) * 2);
        let gender = random == 0 ? Gender.Female : Gender.Male;

        switch (this.type) {
          case Type.Hummingbird:
            baby = new Hummingbird("Newborn", 0, gender, this.weight * 0.2);
            break;
          case Type.Platypus:
            baby = new Platypus("Newborn", 0, gender, this.weight * 0.2);
            break;
          case Type.Shark:
            baby = new Shark("Newborn", 0, gender, this.weight * 0.2);
            break;
          case Type.Chimpanzee:
            baby = new Chimpanzee("Newborn", 0, gender, this.weight * 0.2);
            break;
          default:
            break;
        }
        this.baby = baby;
      }

      console.log(`${this.name} is now pregnant!`);
    } else {
      console.log("Failed: Animal must be female and not already pregnant!");
    }
  }

  GiveBirth() {
    if (this.isPregnant) {
      this.isPregnant = false;
      let animal = this.baby;
      this.baby = null;
      console.log(
        `${this.name} has given birth!`
      );
      return animal; // returns nwborn, which must then be added to zoo.
    } else {
      return console.log("Failed: Animal must be female and pregnant!");
    }
  }
}

// Create Animal descendant classes.
class Hummingbird extends Animal {
  constructor(name, age, gender, weight) {
    super(name, Type.Hummingbird, age, gender, weight);
    // Hardcoded values.
    this.isPregnant = false;
    this.moveDistance = 5;
  }

  Move() {
    console.log(`${this.name} is flying!`);
  }
}

class Platypus extends Animal {
  constructor(name, age, gender, weight) {
    super(name, Type.Platypus, age, gender, weight);
    // Hardcoded values.
    this.baby = null;
    this.isPregnant = false;
    this.moveDistance = 25;
  }

  Move() {
    console.log(`${this.name} is swimming!`);
  }
}

class Shark extends Animal {
  constructor(name, age, gender, weight) {
    super(name, Type.Shark, age, gender, weight);
    // Hardcoded values.
    this.baby = null;
    this.isPregnant = false;
    this.moveDistance = 58;
  }

  Move() {
    console.log(`${this.name} is swimming!`);
  }
}

class Chimpanzee extends Animal {
  constructor(name, age, gender, weight) {
    super(name, Type.Chimpanzee, age, gender, weight);
    // Hardcoded values.
    this.baby = null;
    this.isPregnant = false;
    this.moveDistance = 12;
  }

  Move() {
    console.log(`${this.name} is pacing!`);
  }
}

// Enums for classes.
const Gender = {
  Male: "Male",
  Female: "Female",
};

const Type = {
  Hummingbird,
  Platypus,
  Shark,
  Chimpanzee,
};

// Populate the zoo, instantiate objects
let zoo = new Zoo("TimberWolf Sanctuary", 35, 10);
zoo.AddAnimal(new Hummingbird("Harry", 1, Gender.Male, 2.2));
zoo.AddAnimal(new Platypus("Perry", 2, Gender.Female, 5.3));
zoo.AddAnimal(new Shark("Sophie", 3, Gender.Female, 852));
zoo.AddAnimal(new Chimpanzee("Chloe", 2, Gender.Female, 73.5));

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
  if (div != null) {
    div.innerHTML = content;
  }
}
PopulateZoo();


// ==============================================
// C1 Lab 5: Acronym

let parse = (string) => {
  string = string.replace(/[_-]/g, " ").replace(/'s/g, " ");
  return string.match(/\b(\w)/g).join("").toUpperCase();
};

// ==============================================

function PopulateAnimals() {
  let animals = zoo.animalArray;
  
  animals.forEach(animal => {
    const acronym = parse(`${animal.name} ${animal.type.name}`);
    const content = `
    <div class="anima">
    <div></div>
    <h3 style="text-align:center">[${acronym}]</h3>
    <h4>${animal.name} the ${animal.type.name}</h4>
    <ul>
      <li>Age: ${animal.age}</li>
      <li>Weight: ${animal.weight}</li>
      <li>Gender: ${animal.gender}</li>
      <li>isPregnant: ${animal.isPregnant}</li>
    </ul>
    </div>
    `;

    const list = document.getElementById('animalDiv');
    if (list != null) {
      list.innerHTML += content;
    }
  });
}
PopulateAnimals();
