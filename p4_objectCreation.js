function Person(saying) {
  this.saying = saying;
}

Person.prototype.talk = function () {
  console.log('I said:', this.saying);
}

// standart way
var crockforg = new Person('SEMICOLONS!!!');
crockforg.talk();


// build manually
var builded = spawn(Person, "I AM ARTIFICIAL");
builded.talk();


// build manually
function spawn(constructor) {

  // 1 - create new object
  var obj = {};
  // 2 - set the prototype
  Object.setPrototypeOf(obj, constructor.prototype)

// convert arguments into array (ES5), apply invokes the function immediately
  var argsArray = Array.prototype.slice.apply(arguments);
    // var argsArray = Array.from(arguments); // convert arguments into array (ES6)

  // 3 - execute the constructor with this
  constructor.apply(obj, argsArray.slice(1));

  // 4 - return new object
  return obj;
}
