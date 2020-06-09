// Person Constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}


const sabina= new Person('Sabina',20);
const manish = new Person('Manish',18);

console.log(sabina.age);

//birthday property
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const difference = Date.now() - this.birthday.getTime();
        const ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const sabina = new Person('Sabina', '04-09-2000');
console.log(sabina);
console.log(sabina.calculateAge());

// Built in Construcots
//String
const name1 = 'Sabina';
const name2 = new String('Sabina');

console.log(name1); //if we define name2 it shows name with string i.e object

if(name1 === 'Sabina'){
    console.log('YES');
} else {
    console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);
console.log(num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool2);

//Function
const getSum1 = function(x, y){
return x + y;
}

console.log(getSum1(1,1));

//object
const sabina1 = {name: "Sabina"};
const sabina2 = new Object({name: "Sabina"});
console.log(sabina2);

//Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);

//Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re2);

// Prototypes
//Object.prototype
//Person.prototype
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const difference = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(difference);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

//Calculate Age
Person.prototype.calculateAge = function(){
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

//Get full name
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

const sabina = new Person('Sabina', 'Karki', '04-09-2000');
const alisha = new Person('Alisha','Karki', 'april 9 1999');
console.log(alisha);

console.log(sabina.calculateAge());

console.log(alisha.getFullName());

//Prototype Inheritance
//Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function(){
    return `Hello World ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('Sabina', 'Karki');

//console.log(person1.greeting());

//Customer constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

//Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//Create Customer
const Customer1 = new Customer('Alisha', 'Karki', '9841-053490', 'Standard');

console.log(Customer1);

//Customer Greeting
Customer.prototype.greeting = function(){
    return `Hello World ${this.firstName} ${this.lastName} Welcome to the Wrold!`;
}

console.log(Customer1.greeting());

//Another way to define object using Object.create
const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;
    }
}

const sabina = Object.create(personPrototypes);
sabina.firstName = 'Sabina';
sabina.lastName = 'karki';
sabina.age = 20;

sabina.getsMarried('Alisha');

console.log(sabina.greeting());

//ES6 Classes
class Person {
    constructor(firstName, lastName) {
        this.lastName = firstName;
        this.lastName = lastName;

    }

    greeting() {
        return `Hello World ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const difference = Date.now() - this.birthday.getTime();
        const ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumber(x, y){
        return x + y;
    }
}

const sabina = new Person('Sabina', 'Karki', '04-09-2000');

sabina.getsMarried('Karki');

console.log(sabina);

console.log(Person.addNumber(1, 2));

//Sub Classes
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this. lastName = lastName;
    }

    greeting() {
        return `Hello World ${this.firstName} ${this,this.lastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 1000;
    }
}

const sabina = new Customer('Sabina', 'Karki', '9841-053490', 'Standard');

console.log(sabina.greeting());

console.log(Customer.getMembershipCost());



