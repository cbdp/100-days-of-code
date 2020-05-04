/*
As you have seen from applying Array.prototype.map(), or simply map 
earlier, the map method returns an array of the same length as the one it 
was called on. It also doesn't alter the original array, as long as its 
callback function doesn't.

In other words, map is a pure function, and its output depends solely 
on its inputs. Plus, it takes another function as its argument. */

// The global variable
var s = [23, 65, 98, 5];

// create a .map-like method
Array.prototype.myMap = function(callback){
  let newArray = [];
  for (let i = 0; i < this.length; i++) { // using for loop
    newArray.push(callback(this[i]));
  }
  return newArray;
};

// Alternative with forEach 
Array.prototype.myMap2 = function(callback){
  let newArray = [];
  this.forEach(a => newArray.push(callback(a))); // using forEach
  return newArray;
};

// the test
var new_s = s.myMap(function(item){
  return item * 2;
});