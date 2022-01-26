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
    this.animalArray.splice(animal, 1);
    alert(`${this.animalArray[animal].name} has been removed!`);
  }

  // Takes index and then animal
  UpdateAnimal(animalOLD, animalNEW) {
    this.animalArray[animalOLD] = animalNEW;
    let indexNew = this.FindAnimalByName(animalNEW.name);
    alert(`${this.animalArray[indexNew].name} has been updated!`);
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
    alert(`${this.name} is moving!`);
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

      alert(`${this.name} is now pregnant!`);
    } else {
      alert("Failed: Animal must be female and not already pregnant!");
    }
  }

  GiveBirth() {
    if (this.isPregnant) {
      zoo.animalArray.push(this.baby);
      this.isPregnant = false;
      this.baby = null;
      alert(
        `${this.name} has given birth and her baby has been added to the zoo!`
      );
    } else {
      alert("Failed: Animal must be female and pregnant!");
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
    alert(`${this.name} is flying!`);
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
    alert(`${this.name} is swimming!`);
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
    alert(`${this.name} is swimming!`);
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
    alert(`${this.name} is pacing!`);
  }
}

// Enums for classes.
export const Gender = {
  Male: "Male",
  Female: "Female",
};

export const Type = {
  Hummingbird,
  Platypus,
  Shark,
  Chimpanzee,
};

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
  div.innerHTML = content;
}
PopulateZoo();

// function PopulateAnimals() {
//   let animals = zoo.animalArray;
//   animals.forEach(animal => {
//     const content = `
//     <div class="anima">
//     <h4>${animal.name} the ${animal.type.name}</h4>
//     <ul>
//       <li>Age: ${animal.age}</li>
//       <li>Weight: ${animal.weight}</li>
//       <li>Gender: ${animal.gender}</li>
//       <li>isPregnant: ${animal.isPregnant}</li>
//     </ul>
//     </div>
//     `;
//     const list = document.getElementById('animalDiv');
//     list.innerHTML += content;
//   });
// }
// PopulateAnimals();
