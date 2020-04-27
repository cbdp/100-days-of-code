function countOnline(usersObj) {
  // Only change code below this line
  
  let howManyOnline = 0;

  for (let whtthisdo in usersObj) {
    if (usersObj[whtthisdo].online === true) {
      howManyOnline++;
    };
  };
  return howManyOnline;
  // Only change code above this line */
};