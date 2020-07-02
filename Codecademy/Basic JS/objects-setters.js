/* Along with getter methods, we can also create setter 
methods which reassign values of existing properties 
within an object. 

Setter methods like age do not need to be called with a 
set of parentheses. Syntactically, it looks like we’re 
reassigning the value of a property. */

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if (typeof this._numOfSensors === 'number') {
      return this._numOfSensors + ' is the num';
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

// call the setter method
robot.numOfSensors = 100;

// call the getter method to check
console.log(robot.numOfSensors);