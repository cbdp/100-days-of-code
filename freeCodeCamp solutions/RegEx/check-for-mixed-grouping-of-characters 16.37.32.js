let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line

/*
Your regex myRegex should return true for the string Franklin D. Roosevelt

Your regex myRegex should return true for the string Eleanor Roosevelt

Your regex myRegex should return false for the string Franklin Rosevelt

Your regex myRegex should return false for the string Frank Roosevelt

You should use .test() to test the regex.

Your result should return true.
*/