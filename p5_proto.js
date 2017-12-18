let cat = {breed: 'munchkin'}
let myCat = {name:'fluffy'}

//change prototype via function
Object.setPrototypeOf(myCat, cat);

console.log(myCat.name); //fluffy
console.log(myCat.breed); //munchkin
console.log(myCat.__proto__); //{ breed: 'munchkin' }

//change prototype manually
myCat.__proto__ = {wings: 'two'};
console.log(myCat.wings); //two
// we've lost previous link
console.log(myCat.breed); //undefined

//restore
Object.setPrototypeOf(myCat, cat);


//__proto__ is REFERENCE
cat.eyes = 'blue';
console.log(myCat.__proto__); //{ breed: 'munchkin', eyes: 'blue' }
console.log(myCat.eyes); //blue

//if we add to prototype - all instances will have the property
function Dog() {}
Dog.prototype.breed = "Bulldog";
console.log(new Dog()); //Dog {}

let myDoggie = new Dog();
console.log(myDoggie.breed); //Bulldog

// prototype is a separate object, and __proto__ refers to it
console.log(myDoggie.__proto__); //Dog { breed: 'Bulldog' }
console.log(Dog.prototype); //Dog { breed: 'Bulldog' }


// all __proto__ points to Object.prototype
let koala = {};
console.log(koala.__proto__); //{}
console.log(koala.__proto__ === Object.prototype); //true

Object.prototype.hush = 'hushhhh';
console.log(koala.hush); //hushhhh
console.log(myDoggie.hush); //hushhhh

//NOT CLEAR
//recap: __proto__ is property in object that points out to prototype of that object
// .prototype - is a property on a Function (only) that is set as a property when you use a 'new' command
