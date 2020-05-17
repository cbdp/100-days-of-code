let Person = function(firstAndLast) {
  
  // object variables
  let newArray = firstAndLast.split(' ');
  let firstName = newArray[0];
  let lastName = newArray[1];

  // object methods (get)
  this.getFullName = function() {
    return firstName + ' ' + lastName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.getFirstName = function() {
    return firstName;
  };

  // object methods (set)
  this.setFirstName = function(x) {
    firstName = x;
  };
  this.setLastName = function(x) {
    lastName = x;
  };
  this.setFullName = function(x) {
    let newNameArray = x.split(' ');
    firstName = newNameArray[0];
    lastName = newNameArray[1];  
  };
};

var bob = new Person('Bob Ross');