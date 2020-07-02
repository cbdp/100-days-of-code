/* the calling object is the object the method belongs to. 
If we use the this keyword in a method then the value of 
this is the calling object. However, it becomes a bit more 
complicated when we start using arrow functions for methods.

Arrow functions inherently bind, or tie, an already defined 
this value to the function itself that is NOT the calling 
object.

OBS: The key takeaway from the is to avoid using arrow 
functions when using this in a method!! */


// with arrow func
const robotArrow = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robotArrow.checkEnergy(); // returns undefined


// without arrow func
const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  },
}

robot.checkEnergy(); // returns 100