describe(`Store Class Functions`, () => {
    let model;

    beforeEach(() => {
        model = new Store('KlerntMart', true);
        model.AddItem(new Fruit("Bananas", "Fresh", 3.42));
        model.AddItem(new Fruit("Strawberries", "Non-GMO", 5.25));
        model.AddItem(new Fruit("Grapes", "Organic", 2.83));
    });

    describe('Instantiation', () => {
        it('Create new store object with passed-in values', () => {
            expect(model.Name).toBe('KlerntMart');
        });
    });

    describe('Items', () => {
        it('Add new item to store', () => {
            model.AddItem(new Fruit("Watermelons", "Fresh", 11.35));
            // Get the index of an array item by searching it's Name property
            let index = model.items.map(e => e.Name).indexOf('Watermelons');
            expect(model.items[index].Name).toBe("Watermelons");
        });
        it('Remove item from store', () => {
            let index = model.items.map(e => e.Name).indexOf('Grapes');
            let result = model.RemoveItem(index);
            expect(result).not.toEqual(null);
        });
        it('Update item from store', () => {
            let index = model.items.map(e => e.Name).indexOf('Bananas');
            model.UpdateItem(index, new Fruit("Tomatoes", "Non-GMO", 3.69))
            expect(model.items[index].Name).toBe("Tomatoes");
        });
    });

    describe('Checkout', () => {
        it('Caculates total', () => {
            let result = model.CheckoutTest(model.items[1], 4);
            expect(result).toBe(21.00.toFixed(2));
        });
        // I was not sure how to test the randomized portions of the checkout
    });
});