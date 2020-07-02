/* In the previous exercises we’ve been creating instances 
of objects that have their own methods. But, we can also 
take advantage of built-in methods for Objects! */

const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// get all keys
const robotKeys = Object.keys(robot);
console.log(robotKeys);

// get all entries (key & value)
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Copy robot and add additional entries
const newRobot = Object.assign({
  laserBlaster: true, 
  voiceRecognition: true
  }, robot);
console.log(newRobot);