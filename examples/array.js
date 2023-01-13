/* An array, or list, is a group of values in JavaScript
 * 
 * A new array can be created using square brackets: []
 *   const primaryColors = ['red', 'blue', 'green'];
 * 
 * An item can be retrieved from the list using its index, which starts at zero:
 *   const myFavoriteColor = primaryColors[1]; // 'blue'
 * 
 * There are many methods that can be called on a list, which can modify it, copy it, or use it.
 *   (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)
 */

const personA = { name: 'Abby', age: 20 };
const personB = { name: 'Betty', age: 22 };
const personC = { name: 'Cathy', age: 9 };

const people = [ personA, personB, personC ];

// Adds a new person to the list
people.push({ name: 'Debbie', age: 18 });

// Does something using each person in the list
people.forEach(person => {
    console.log(`Name: ${person.name}`);
});

// Creates a new list of people who pass (true) the filter
const adults = people.filter(person => person.age >= 18);

// Creates a new list of values that are given by the function
const names = people.map(person => person.name);

// Finds the first person to match the function, or null if none match.
const matchingPerson = people.find(person => person.name === 'Betty');

// Finding the position (index) of a person in the list
const matchingPosition = people.findIndex(person => person.name === 'Betty');

// Removing a person from the list
people.splice(matchingPosition, 1);
