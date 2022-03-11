describe(`${Zoo.name} Class Functions`, () => {
    let model;

    beforeEach(() => {
        model = new Zoo("TimberWolf Sanctuary", 35, 10);
        model.AddAnimal(new Hummingbird("Harry", 1, Gender.Male, 2.2));
        model.AddAnimal(new Platypus("Perry", 2, Gender.Female, 5.3));
        model.AddAnimal(new Shark("Sophie", 3, Gender.Female, 852));
        model.AddAnimal(new Chimpanzee("Chloe", 2, Gender.Female, 73.5));
        model.AddAnimal(new Chimpanzee("Cleo", 5, Gender.Female, 120.5));
    });

    describe('AddAnimal', () => {
        it('Animal object is added to zoo animalArray', () => {
            model.AddAnimal(new Hummingbird("Larry", 4, Gender.Male, 4.3));
            expect(model.animalArray[5].name).toBe("Larry");
        });
    });

    describe('UpdateAnimal', () => {
        it('Animal object is updated in zoo animalArray', () => {
            let result = new Hummingbird("Jerry", 4, Gender.Male, 4.3);
            model.UpdateAnimal(1, result);
            expect(model.animalArray[1].name).toBe("Jerry");
        });
    });

    describe('FindAnimalByName', () => {
        it('Animal index is found from zoo animalArray', () => {
            let result = model.FindAnimalByName("Harry", "index");
            expect(result).toBe(0);
        });
        it('Animal object is found from zoo animalArray', () => {
            let result = model.FindAnimalByName("Harry", "animal");
            expect(result.name).toBe("Harry");
        });
    });

    describe('RemoveAnimal', () => {
        it('Animal object is removed from zoo animalArray', () => {
            model.animalArray.push(new Hummingbird("toRemove", 4, Gender.Male, 4.3));
            let result = model.FindAnimalByName("toRemove", "index");
            let removed = model.RemoveAnimal(result);
            expect(removed).not.toBe(null); 
        });
    });

    describe('MakePregnant', () => {
        it('Set female animal to pregnant', () => {
            let result = model.FindAnimalByName("Chloe", "index");
            model.animalArray[result].MakePregnant();
            expect(model.animalArray[result].isPregnant).toBe(true);
        });
        it('Male animal cannot be pregnant', () => {
            let result = model.FindAnimalByName("Harry", "index");
            model.animalArray[result].MakePregnant();
            expect(model.animalArray[result].isPregnant).toBe(false);
        });
    });

    describe('GiveBirth', () => {
        it('Pregnant female gives birth', () => {
            let index = model.FindAnimalByName("Cleo", "index");
            model.animalArray[index].MakePregnant();
            let newborn = model.animalArray[index].GiveBirth();
            model.AddAnimal(newborn);
            expect(newborn).not.toBe(null);
        });
    });
});