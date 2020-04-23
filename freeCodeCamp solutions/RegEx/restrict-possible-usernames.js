let username = "JackOfAllTrades";
let userCheck = /^[a-z](\d\d+|[a-z]+\d*)$/i; // Change this line
let result = userCheck.test(username);

/* 
Code Explanation => /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i
1. ^ - start of input
2. [a-z] - first character is a letter
3. [0-9][0-9]+ - ends with two or more numbers
4. | - or
5. [a-z]+ - has one or more letters next
6. \d* - and ends with zero or more numbers
7. $ - end of input
8. i - ignore case of input

Code refactor => /^[a-z](\d\d+|[a-z]+\d*)$/i
*/
