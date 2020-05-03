/*
As you have seen, behavior is shared through inheritance. However, there 
are cases when inheritance is not the best solution. Inheritance does not 
work well for unrelated objects like Bird and Boat. They can both glide, 
but a Bird is not a type of Boat
*/

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// For unrelated objects, it's better to use mixins. 
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log('gliiiiide...');
  };
};
// adding
glideMixin(bird);
glideMixin(boat);
// testing
bird.glide();
boat.glide();