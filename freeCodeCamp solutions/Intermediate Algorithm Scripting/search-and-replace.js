function myReplace(str, before, after) {
  let i = str.indexOf(before);

  if (str[i].match(/([A-Z])/g)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  };
  return str.replace(before, after);
};

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("His name is Tom", "Tom", "john")

