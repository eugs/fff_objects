class Mammal {
  constructor(sound) {
    this._sound = sound;
    this['priv'] = 'hidden';
  }

  talk() {
    return this._sound;
  }

}

class Dog extends Mammal {
  constructor() {
    super('ahrrrrr');
  }
}

let fluffy = new Dog('woof');
console.log(fluffy.talk()); //ahrrrrr
console.log(fluffy._sound); //ahrrrrr
console.log(fluffy._priv); //undefined


//inheritance is a fake?
console.log(Dog.prototype.talk.bind({_sound: 'noooo'})()); //nooo
console.log(Dog.prototype.isPrototypeOf(fluffy)); //true
