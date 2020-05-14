// my solve
const convertHTML = str =>
  str
    .replace(/&/g, "&amp;")
    .replace(/>/g, "&gt;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");


// solve with switch from the docs
function convertHTMLSwitch(str) {
  // Split by character to avoid problems.
  var temp = str.split("");
  // Since we are only checking for a few HTML elements, use a switch
  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }
  temp = temp.join("");
  return temp;
}


// js object to help in mapping and/or replacing the html entities
// this is also from the docs and used in the next two solves
const htmlEntities = {
   // Use Object Lookup to declare as many HTML entities as needed.
   "&": "&amp;",
   "<": "&lt;",
   ">": "&gt;",
   '"': "&quot;",
   "'": "&apos;"
  };


// Docs solve with using the above object and regex
function convertHTMLRegEx(str) {
// Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}


// Docs solve with .map
function convertHTMLMap(str) {
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// the test
convertHTML("Dolce & Gabbana");