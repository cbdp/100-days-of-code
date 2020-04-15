// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop !== "tracks") {
    collection[id][prop] = value;
  } else if (collection[id].hasOwnProperty("tracks") === true) {
    collection[id].tracks.push(value)
  } else if (collection[id].hasOwnProperty("tracks") === false) {
    collection[id].tracks = [value];
  } else if (prop !== "artist") {
    collection[id][prop] = value;
  } else if (collection[id].hasOwnProperty("artist") === true) {
    collection[id].artist.push(value)
  } else if (collection[id].hasOwnProperty("artist") === false) {
    collection[id].artist = [value];
  } else if (prop !== "album") {
    collection[id][prop] = value;
  } else if (collection[id].hasOwnProperty("album") === true) {
    collection[id].album.push(value)
  } else if (collection[id].hasOwnProperty("album") === false) {
    collection[id].album = [value];
  };
  return collection;
};

updateRecords(5439, "artist", "ABBA");
