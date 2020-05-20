// my solve with two arrays
const decode = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
                 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
                 'W', 'X', 'Y', 'Z', ' ', '!', '?', ',', '.' ];
const encode = [ 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                 'J', 'K', 'L', 'M', ' ', '!', '?', ',', '.' ];

function rot13(str) {
  let decodedArray = [];
  let encodedArray = str.split('');
  encodedArray.map(letter => 
    decodedArray.push(decode[encode.indexOf(letter)]));
  return decodedArray.join('');
}

rot13("SERR PBQR PNZC");

// solve from docs with fromCharCode, regex and replace
function rot13Replace(str) {
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
};

// similar solve to mine with indexOf and a string instead of an array
function rot13String(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
      .split('')
      .map(char => {  
        const pos = alphabet.indexOf(char);      
        return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
      })
      .join('');
};