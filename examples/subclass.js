
class Pet {
    constructor(name) {
        this.name = name;
    }

    play() {
        console.log(`Playing with ${this.name}!`);
    }

    sleep() {
        console.log(`${this.name} is sleeping...`);
    }
}

class Dog extends Pet {
    constructor(name, breed) {
        super(name); // Calls Pet.constructor using `super`
        this.breed = breed;
    }

    play() {
        // This will override the play method from Pet
        console.log(`Playing with my ${this.breed} named ${this.name}!`);
    }

    bark() {
        // This will give a new method to only Dog objects
        console.log('Woof!');
    }
}

const myBird = new Pet('Polly');
const myDog = new Dog('Fido', 'Labrador');

myBird instanceof Pet // true
myBird.play() // Playing with Polly!
myBird.sleep() // Polly is sleeping...
myBird.bark() // ERROR

myDog instanceof Pet // true
myDog instanceof Dog // true
myDog.play() // Playing with my Labrador named Fido!
myDog.sleep() // Fido is sleeping...
myDog.bark() // Woof!
