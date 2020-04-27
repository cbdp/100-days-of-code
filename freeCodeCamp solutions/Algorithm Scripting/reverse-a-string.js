const reverseString = (str) => {
  let array = [];
  for (let i = 0; i < str.length; i++) {
    array.push(str[i]);
  };
  return array.reverse().toString().replace(/,/g, '');
};