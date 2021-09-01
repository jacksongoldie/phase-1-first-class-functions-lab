/*/ Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers[0][1]; - doesn't work because it doesn't create a new array???
}
*/

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function(fare){
        return fare * int;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnDrivers){
    if (returnDrivers === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }
    else {return returnLastTwoDrivers(drivers)};
}