let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/gi; // Change this line
let result = ohRegex.test(ohStr);

/* 
Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. 
*/