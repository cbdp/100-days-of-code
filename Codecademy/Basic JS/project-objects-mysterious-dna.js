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

// factory function (destructured, I think)
function pAequorFactory(specimenNum, dna) {
    return {
        specimenNum,
        dna,
        mutate() {
            // this should probably be done without a returnRandBaseNoDoubles for each case
            const mutationIndex = Math.floor(Math.random() * (this.dna.length - 1));
            const mutation = this.dna[mutationIndex];
            if (mutation === 'A') {
                return this.dna.splice(mutationIndex, 1, returnRandBaseNoDoubles('A'));
            } else if (mutation === 'T') {
                return this.dna.splice(mutationIndex, 1, returnRandBaseNoDoubles('T'));
            } else if (mutation === 'C') {
                return this.dna.splice(mutationIndex, 1, returnRandBaseNoDoubles('C'));
            } else if (mutation === 'G') {
                return this.dna.splice(mutationIndex, 1, returnRandBaseNoDoubles('G'));
            }
        },
        compareDNA(other) {
            let counter = 0;
            for (let i = 0; this.dna.length > i; i++) {
                if (this.dna[i] === other.dna[i]) {
                    counter++;
                }
            }
            let percentage = ((counter / this.dna.length) * 100).toFixed();
            console.log('Specimen ' + this.specimenNum + ' and specimen ' + other.specimenNum + ' have ' + counter + ' DNA bases in common, which is roughly ' + percentage + '%.');
        },
        willLikelySurvive() {
            let survivability = 0;
            this.dna.forEach(x => {
                if (x === 'C' || x === 'G') {
                    survivability++;
                }
            });
            return (((survivability / this.dna.length) * 100) > 60) ? true : false;
        },
    }
}

const createSurvivors = (num) => {
    let organismArray = [];
    let index = 0
    while (index < num) {
        let newOrganism = pAequorFactory(index, mockUpStrand());
        if (newOrganism.willLikelySurvive()) {
            organismArray.push(newOrganism);
            index++;
        }
    }
    return organismArray;
}

// create two new organisms:
const testOrganism1 = pAequorFactory(1, mockUpStrand());
const testOrganism2 = pAequorFactory(2, mockUpStrand());

// show the dna of one:
console.log(testOrganism1.dna);

// mutate the dna of same:
testOrganism1.mutate();

// compare it with the other one:
testOrganism1.compareDNA(testOrganism2);

// test survivability of one:
console.log(testOrganism1.willLikelySurvive());

// create 30 organism, guarenteed to survive:
let new30 = createSurvivors(30);
