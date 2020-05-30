/* ON EXPORT
There are multiple ways in we can export the stuff in 'airplane.js':

export default Airplane;
export { Airplane };
export { Airplane as flyingMachines};

or by using the export statement directly:
export let availableAirplanes =  {};
*/

// AIRPLANE.JS
export let availableAirplanes = [
    {
      name: 'AeroJet',
      fuelCapacity: 800,
      availableStaff: [ 'pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators' ],
      maxSpeed: 1200,
      minSpeed: 300
    },
    {
      name: 'SkyJet',
      fuelCapacity: 500,
      availableStaff: ['pilots', 'flightAttendants'],
      maxSpeed: 800,
      minSpeed: 200
    }
  ];

export let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700
  };

export const meetsStaffRequirements = (availableStaff, requiredStaff) => availableStaff.length >= requiredStaff;

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  return range > requiredSpeedRange;
};

export default meetsSpeedRangeRequirements;


////////////////////////////////////////////////////////////////////////////////////////////

/* ON IMPORT
When dealing with local files, it specifically refers to 
the name of the file without the extension of the file:

import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';
import meetsSpeedRangeRequirements from './airplane';

Another way of using aliases is to import the entire 
module as an alias:

import * as Potato from './airplane';
Potato.availableAirplanes;
Potato.meetsStaffRequirements();
Potato.meetsSpeedRangeRequirements();
*/


// MISSIONCONTROL.JS
import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';
import meetsSpeedRangeRequirements from './airplane';
function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
      console.log('Fuel Capacity of ' + element.name + ' : ' + element.fuelCapacity);
    });
};

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  })
};

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
};

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();