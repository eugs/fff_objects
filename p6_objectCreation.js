//Object.create - creates a new Object with a prototype set to a certain Object

const cat = {
  makeSound: function () {
    console.log(this.sound);
  }
}

const mark = Object.create(cat);
mark.sound = 'wufff'; //wufff
mark.makeSound();
console.log(mark.__proto__); //{ makeSound: [Function: makeSound] }
console.log('Is mark a cat?', cat.isPrototypeOf(mark)); //Is mark a cat? true
console.log(mark.__proto__ === cat); //true

//Object.create is more natural for prototype model than 'new' keyword
//but it's better to use 'new'


//something like this
function objectCreate(proto) {
  const obj = {};
  Object.setPrototypeOf(obj, proto);
  return obj;
}

let pinkie = objectCreate(cat);
pinkie.sound = 'rawr'
pinkie.makeSound(); //rawr
