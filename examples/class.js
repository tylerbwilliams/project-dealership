/* A class is a template for making a new object in JavaScript
 * 
 * An instance object is created from a class using the `new` keyword:
 *   const dog = new Dog("Spike", 4, 45);
 *   console.log(`Hello ${dog.name}!`);
 * 
 * The `new` keyword calls the `constructor`, which is required.
 * 
 * This example creates a class with name, age, weight, and owner fields.
 *   The name, age, and weight are passed in as input parameters, and owner is set to null (empty).
 *   The bark() method does an action, and the setOwner() method sets the owner field.
 */

export default class Dog {
    static adopt() {
        return new Dog('Fido', 12, 35);
    }

    constructor(name, age, weight) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.owner = null;
    }

    bark() {
        if (this.weight < 20)
            console.log('Yipp!');
        else if (this.weight < 60)
            console.log('Ruff!');
        else
            console.log('Woof!');
    }

    setOwner(owner) {
        this.owner = owner;
    }
}