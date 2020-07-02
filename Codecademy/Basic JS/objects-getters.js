/* Getters are methods that get and return the 
internal properties of an object. 

Getters can perform an action on the data 
when getting a property.

Getters can return different values using conditionals.

In a getter, we can access the properties of the 
calling object using this.

The functionality of our code is easier for other 
developers to understand.

Another thing to keep in mind when using getter 
(and setter) methods is that properties cannot 
share the same name as the getter/setter function. 
If we do so, then calling the method will result 
in an infinite call stack error. One workaround 
is to add an underscore before propName */ 

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel == 'number') { 
      return 'My current energy level is ' + this._energyLevel;
    } else {
      return 'System malfunction: cannot retrieve energy level'
    }
  },
};

console.log(robot.energyLevel);