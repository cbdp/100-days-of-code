function titleCase(str) {

  let array = str.toLowerCase().split(' ');
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i][0].toUpperCase() + array[i].slice(1, array[i].length));
  };
  return result.join(' ');
};

titleCase("I'm a little tea pot");

/*
Above is my solution, but I'm loving this one listed in the docs using regex:
const titleCase = (str) => str.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
*/