// return random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
}

// return random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// return random DNA base, without the original
const returnRandBaseNoDoubles = (str) => {
  let oldStr = str.repeat(1);
  while (oldStr === str) {
    str = returnRandBase();
  };
  return str;
};

// destructured factory function
function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum,
    dna,
    mutate() {
      const mutationIndex = Math.floor(Math.random() * (this.dna.length - 1));
      const mutation = this.dna[mutationIndex];
      if (mutation === 'A') {
        return this.dna.splice(mutationIndex, 1, returnRandBase('A'));
      } else if (mutation === 'T') {
        return this.dna.splice(mutationIndex, 1, returnRandBase('T'));
      } else if (mutation === 'C') {
        return this.dna.splice(mutationIndex, 1, returnRandBase('C'));
      } else if (mutation === 'G') {
        return this.dna.splice(mutationIndex, 1, returnRandBase('G'));
      }
    },
    compareDNA(dna, other) {
      console.log('Specimen ' + this.specimenNum + ' and specimen ' + other.specimenNum + ' have ??? DNA in common');
    },
  }
}

const testOrganism = pAequorFactory(1, mockUpStrand());
console.log(testOrganism.dna);
testOrganism.mutate();
console.log(testOrganism.dna);


//// not finished