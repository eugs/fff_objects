function talk(sound) {
  console.log(this);
  console.log(this.sound);
}

let animal = {
  talk: talk,
}

let cat = {
  sound: 'meow'
}

let dog = {
  sound: 'woof'
}

Object.setPrototypeOf(cat, animal);
cat.talk();
// { sound: 'meow' }
// meow

Object.setPrototypeOf(dog, animal);
dog.talk();
// { sound: 'woof' }
// woof


let prarieDog = {
  howl: function () {
    console.log(this.sound.toUpperCase());
  }
}

Object.setPrototypeOf(prarieDog, dog);
prarieDog.howl(); //WOOF
