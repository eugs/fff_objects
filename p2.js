function talk() {
  console.log(this.sound);
}

let boromir = {
  speak: talk,
  sound: 'One does not simply walk into mordor!',
  blabber: talk
}

let talkBound = talk.bind(boromir);
  talkBound(); //One does not simply walk into mordor!
  talk(); //undefined
  boromir.speak();//One does not simply walk into mordor!


let blabber = boromir.speak;
blabber(); // undefined, refers to global

// let's bind
boromir.speak = talk.bind(boromir);
let blabberBinded = boromir.speak;
blabberBinded(); //One does not simply walk into mordor!

//! bind creates a new copy of function, where .this ALWAYS refers to boromir


let gollum = {
  jabber: boromir.blabber,
  sound: 'My preciousssss...'
}

gollum.jabber(); //My preciousssss...
// it find 'sound'

//.this is CONTEXT-SENSITIVE
//function just a value that can be passed, placed as property etc
//bind() bounds function with SPECIFIC value
