// Return true if the given string is a palindrome. 
// Otherwise, return false.

function palindrome(str) {
  let cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().trim();
  let reversedStr = cleanStr.split('').reverse().join('');
  return reversedStr === cleanStr;
};

palindrome("eye");
palindrome("_eye");
palindrome("A man, a plan, a canal. Panama");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("not a palindrome");