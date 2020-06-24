function conquerIsland(map) {
    let isle = [];
    for (let i = 0; map.length > i; i++) {
        if (map[i].indexOf('u') >= 0) {
            isle.push([i, map[i].indexOf('u')]);
        }
    }
    if (isle.length === 0) {
        for (let i = 0; map.length > i; i++) {
            if (map[i].indexOf('m') >= 0) {
                isle.push([i, map[i].indexOf('m')]);
            }
        }
    }

    if (isle.includes(isle[0])) {
        
        isle = isle.sort();
        if (isle.length > 0) {

            let isleReduced = [];

            for (let i = 0; isle.length > i; i++) {
                isleReduced.push(isle[i].reduce((x, y) => (x + y)));
            };

            let catcher = isleReduced.filter(x => isleReduced[0] > x);
            if (catcher.includes(catcher[0]) && isle[isleReduced.indexOf(catcher)] !== isle[0]) {
                return isle[isleReduced.indexOf(catcher)];
            };

            let indexOfDouble = isleReduced.lastIndexOf(isleReduced[0]);
            
            if (indexOfDouble > 0) {
                if ([isle[0] === isle[indexOfDouble]]) { 
                    return isle[0];
                } else if (isle[0] !== isle[indexOfDouble]) {
                    return [isle[0], isle[indexOfDouble]];
                } else if (isleReduced[0] === isleReduced[indexOfDouble]) {
                    return [isle[0], isle[indexOfDouble]];
                } else if (isleReduced[0] > isleReduced[indexOfDouble]) {
                    return isle[indexOfDouble];
                }
            } else {
                return isle[0];
            }
            
        } else {
            return isle;
        } 
        
    } else {
        return [];
    }
};

// expected [ [ 0, 7 ] ] to deeply equal [ [ 0, 7 ], [ 3, 4 ] ]
