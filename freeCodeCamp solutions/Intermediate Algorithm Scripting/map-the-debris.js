const GM = 398600.4418;
const earthRadius = 6367.4447;

function orbitalPeriod(arr) {
  return arr.map(({name, avgAlt}) => {
    let orbital = Math.pow(earthRadius + avgAlt, 3) / GM;
    let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(orbital));
    return {name, orbitalPeriod};
  });
};

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// Other solve from the docs:
function orbitalPeriodDocs(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  // Loop through each item in the array arr
  arr.forEach(function(item) {
    // Calculate the Orbital period value
    var tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    );
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod = tmp;
  });
  return arr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);