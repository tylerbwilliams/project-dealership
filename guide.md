
# Car Dealership Project

## Setup

Copy the contents of `starter` into your directory.

Run the following commands to start the project:

```
$ npm init
$ npm install express
$ npm install ejs
$ npm install lodash
```

Express is a server framework that makes it easier to start a simple server.

EJS is a template system for writing HTML files with Express.

Lodash is a utility collection, making some things easier to write (optional but recommended).

In `package.json` add the following to allow import/export syntax and watch mode.

```
  "type": "module",
  "scripts": {
    "start": "node server.js",
    "watch": "node --watch server.js",
    "test": "node test.js"
  },
```

Run the watch command (nodejs 18+) or the start command:

```
$ npm run watch
```

And verify you can open your server in the link shown (http://localhost:3000).

## Guide

### Creating a Dealership Model

Create a `models` folder

Create a `Dealership` class (`models/dealership.js`) that has *name*, *location*, and *phone number*
fields.

> **Tip:** See the examples folder for some tips on Classes: `examples/class.js`

In `server.js`, import `Dealership` and create a new `dealership` object. 

Pass your dealership to object given to `res.render`.  This will make your object available in the
view files to use in HTML.

In `views/index.ejs`, add your dealership *name* to the `<h1>`.  Refresh to see the changes.

In `views/index.ejs`, add your dealership *location* and *phone number* to the `.details` element.

> **Docs:** EJS Documentation https://ejs.co/#docs


### Creating a Department Model

Create a `Department` class (`models/department.js`) that has *name* and *phone extension*.

Import `Department` into `Dealership`

In `Dealership.constructor`, create a *sales department* and *service department* field that are
each set to a `new Department`.

In `views/index.ejs`, add both departments *names* and phone numbers (*dealer number* + *dept ext*)
to the `.departments` element.


### Creating a Car Model

Create a `Car` class (`models/car.js`) that has *plate*, *make*, *model*, *color*, *price* and
*owner*.  Set *owner* to `null`.

Add a `setOwner` method to `Car` that takes a new *owner* input and sets it to the *owner* field.

In `Dealership.constructor`, create a **list** of *cars* field that is set to an empty list `[]`

> **Tip:** See the examples folder for some tips on lists: `examples/array.js`

Add an `addCar` method to `Dealership` that takes a *car* input and adds it to the *cars* list.  It
should also `car.setOwner` to `this` dealership.

Add a `removeCar` method to `Dealership` that takes a *car* input and removes it from the *cars*
list.  It should also `car.setOwner` to null.

Add a `findCar` method to `Dealership` that takes a *plate* input and returns the car from the list.

Create `utils/randomColor.js`, and export a function that returns a random car color string.

> **Tip:** Lodash provides an easy method to get a random value

Add a **static** `generateRandom` method to `Car`, that returns a new car with random properties.
Use `utils` functions heavily.


### Opening the Dealership

Add an `open` method to `Dealership`, that adds 10 random **cars** to the dealership.  Add a
**console.log** to log the opening, and then log `this`.

In `server.js`, call `dealership.open()` in the `app.listen` method callback.

> **Note:** Check each of your values that should be on Dealership and the cars inside it to make
sure they are correct before continuing.

In `views/index.ejs`, loop through the dealership cars and add them to the `.cars` section.  Check
the `public/styles.css` for pre-made classes, or build your own if you'd like.


### Creating Person and Employee Models

Create a `Person` class (`models/person.js`) that has *id*, *name*, and *car*.  Set *car* to `null`.

Add a `purchaseCar` method to `Person` that takes a *car* input and sets it to this person.  It
should also `car.setOwner` to `this` person.

Add a `sellCar` method to `Person` that clears the *car* field to `null` and returns the old car.

Create an `Employee` class (`models/employee.js`) that is a **subclass** of `Person`.  Employee
should have an *employee id* and *earnings* field.  Set *earnings* to zero.

Add a `makeCommission` method to `Employee` that takes a *car* input and adds the *price* times a
1% commission *rate* to the employee *earnings*.  Return the remainder.

> **Tip:** See the examples folder for some tips on Subclasses: `examples/subclass.js`

Run `npm install random-name`

Add a **static** `generateRandom` method to `Employee`, that returns a new employee with random
properties.  Use the `random-name` package to easily get random fake names.

Add a **list** of *employees* to `Department`, and set it to an empty list `[]`

Add a `hireEmployee` method to `Department` that takes an employee and adds it to the list.

Add a `removeEmployee` method to `Department` that takes an employee and removes it from the list.

Add a `findEmployee` method to `Department` that takes an *employee ID* and returns the employee.

Add a `findAnyone` method to `Department` that returns a random employee from the list. (lodash)

In `Dealership.open` add three random employees to each department.


### Adding Additional Site Pages

Create `views/department.ejs`, and copy over the contents from `views/index.ejs`

In `server.js` create a new `app.get` route for `/sales`, and render `department` instead of
`index`.  Include `department: dealership.salesDept` in the passed data.

Create a similar route for `/service`.

In `views/department.ejs`, remove the `.cars` section and instead add an `.employees` section.
Create the CSS styles however you would like.  Do **not** display the employee's personal ID or
earnings, as this is a "public" page.

Create a `views/partials` folder.

Create `views/partials/header.ejs`, a partial HTML page that will be shared across the site.
Copy the `<header>`, details `<section>`, and departments `<section>` into the new file.

Replace the copied sections in both `index.ejs` and `departments.ejs` with the file include.

> **Docs:** EJS Documentation https://ejs.co/#docs

In `views/partials/header.ejs`, add HTML links to each page you have `/`, `/sales`, `/service`.
A good place is to link the department names and the top `<h1>` tag.


### Creating a Customer Model

Create a `Customer` class (`models/customer.js`) that is a **subclass** of `Person`.  Customer
should have a *cash* and *dealership* fields.  Set *dealership* to `null`.

Add a `setDealership` method to `Customer` that takes a *dealership* input and sets it to the field.

Add a **static** `generateRandom` method to `Customer`, that returns a new customer with random
properties.  Use the `random-name` package to easily get random fake names.  Cash should be set to
`30000` right now (this will change later).


### Adding Customers to Dealership

Add a **list** of *customers* to `Dealership`, set to an empty list `[]`.

Add an `addCustomer` method to `Dealership` that takes a *customer* input and adds it to the
*customers* list. Also, call `customer.setDealership` and pass `this` dealership.

Add a `removeCustomer` method to `Dealership` that takes a *customer* input and removes it from the
*customers* list. Also, call `customer.setDealership` and pass an empty `null`.


### Adding Sale Action

Create a `CarSale` class (`models/car-sale.js`) that has *employee*, *customer*, and *car* fields.

Add a **list** of *sales* to `Dealership`, set to an empty list `[]`.

Add a *cash* field to `Dealership`, set it to 500,000.

Add a `makeSale` method to `Dealership` that takes *employee*, *customer*, and *car* inputs.
 - Create a new `CarSale` and add it to the list of *sales*.
 - Call `purchaseCar` on the *customer* with the new *car*.
 - Call `removeCar` on `this` dealership to remove it from inventory.
 - Call `makeCommission` on the *employee* with the new *car*.
 - Add the profit (returned from `makeCommission`) to the dealership *cash*.


### Adding Trade Action

Add a `makeTrade` method to `Dealership` that takes *employee*, *customer*, and *car* inputs.
 - If the customer does not have a car already, `console.error` a message and exit.
 - Call `sellCar` on the *customer*, then call `addCar` to the dealership with the result.
 - Remove the 70% of price of the customer's car from the dealership *cash*.
 - Call `makeSale` using the *employee*, *customer*, and *car* inputs.
 

### Adding Marketing Action

Add a `doMarketing` method to `Dealership.
 - Create a random customer and add it to this dealership.


### Adding Inventory Action

Add a `doInventory` method to `Dealership`.
 - If this dealership has less cars than customers, log a message and then:
 - Make a random car.
 - If this dealership has enough *cash* to buy, call `addCar`, then subtract 70% of price from cash.
 - If the dealership does not have enough cash, exit.
 

### Adding Hiring Action

Add a `doHiring` method to `Dealership.
 - Add a new random Employee to each department until there is at least 1 employee per 15 customers.


### Adding Advertising Action

Add a `doAdvertising` method to `Dealership`
 - Log a message noting that advertising has started
 - For each customer in the dealership, there is a 4% (0.04) to sell or trade a car to the customer.
 - If successful, and:
   - The customer has no car, sell them a random car from the dealer, with any employee from sales
   - The customer has a car, trade them a random car from the dealer, with any employee from sales


### Adding Automation

In the `Dealership.open` method:
 - Call `doMarketing` 10 times.
 - Call `doHiring` once.
 - Call `doInventory` once.
 - Start a `setInterval` which runs every 4 seconds, which calls doAdvertising
 - Start a `setInterval` which runs every 19 seconds, which calls doMarketing
 - Start a `setInterval` which runs every 23 seconds, which calls doInventory
 - Start a `setInterval` which runs every 53 seconds, which calls doHiring


### Adding an Admin Site Page

Create `views/admin.ejs`, and copy over the contents from `views/index.ejs`

In `server.js` create a new `app.get` route for `/admin`, and render `admin` instead of
`index`.

In `views/admin.ejs`, remove the `.cars` section and instead add an `.customers` section.
Create the CSS styles however you would like.  Display the customers details and *car* (if they
have one).

Add a stats section that displays the current cash, car count, and customer count.

Add a link to `/admin` in the `<footer>` element in `views/index.ejs`
