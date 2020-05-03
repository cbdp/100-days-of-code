/* An immediately invoked function expression (IIFE) is often used to 
group related functionality into a single object or module. */

// We can group two mixins into a module as follows:
let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})(); // The 2 parentheses cause the function to be immediately invoked

/* Note that you have an immediately invoked function expression (IIFE) 
that returns an object motionModule. This returned object contains all of 
the mixin behaviors as properties of the object. The advantage of the 
module pattern is that all of the motion behaviors can be packaged into a 
single object that can then be used by other parts of your code. */

// how to use: motionModule.singMixin(obj);