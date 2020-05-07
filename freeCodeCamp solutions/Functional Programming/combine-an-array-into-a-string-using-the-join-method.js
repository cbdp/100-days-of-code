function sentensifyOrg(str) {
  // First solve without arrow functions
  let split = str.split(/\W/g);
  return split.join(' ');
  // Only change code above this line
};

// rewritten one-liner, essentially same as above
const sentensify = str => str.split(/\W/g).join(' ');

// the test
sentensify("May-the-force-be-with-you");