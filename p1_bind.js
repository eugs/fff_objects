let dog = {
  sound: 'woof',
  talk: function () {
    console.log(this.sound);
  }
}

dog.talk(); //woof
let talkFunction = dog.talk;
talkFunction(); //undefined, .this refers to nothing

// use bind(), now .this refers to dog object
let boundFunction = talkFunction.bind(dog);
boundFunction() //woof
