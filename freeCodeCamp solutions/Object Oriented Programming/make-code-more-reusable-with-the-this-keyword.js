/*
this is a deep topic, and the above example is only one way to use it. In 
the current context, this refers to the object that the method is 
associated with: duck. If the object's name is changed to mallard, it is 
not necessary to find all the references to duck in the code. It makes 
the code reusable and easier to read.
*/

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
