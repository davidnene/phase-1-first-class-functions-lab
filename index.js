// Code your solution in this file!

/**
 * returnFirstTwoDrivers() 
 * — Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it. 
 * The assigned function should accept an array of drivers as an argument and return 
 * the first two drivers in the array.
 */
const drivers = ['John', 'Nick', 'Paul', 'Rachel']

const returnFirstTwoDrivers = function (Array) {
    return (
        [0,1].map(x=>Array[x])
    )
}

/**
 * returnLastTwoDrivers() 
 * — Declare a variable with const that is assigned an anonymous function. 
 * The assigned function should accept an array of drivers as an argument and return 
 * the last two drivers in the array.
 * 
 */
const returnLastTwoDrivers = function (Array) {
    return (
        [Array.length - 2, Array.length - 1].map(x=>Array[x])
    )
}


/**
 * selectingDrivers — This is an array containing two elements: 
 * the two functions that we previously defined 
 * (returnFirstTwoDrivers() and returnLastTwoDrivers()).
 */

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


/**
 * createFareMultiplier() 
 * — This is a higher-order function that takes in one argument, an integer, 
 * and returns a function that will multiply a fare for a ride accordingly. 
 * For example, if createFareMultiplier() receives an argument of 4, 
 * it will return a function that takes in a fare as an argument and quadruples the fare.
 *
 */

function createFareMultiplier(int) {
    return (
        function quintuplier(int) {
            return int * 5;
        }
    )
}

/**
 * fareDoubler()
 *  — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
 * Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts 
 * a fare as its lone argument and doubles it.
 * 
 */

const fareDoubler = function doubler(int) {
    return int * 2;
}

/**
 * fareTripler() 
 * — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
 * Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts 
 * a fare as its lone argument and triples it.
 */

const fareTripler = function trippler(int) {
    return int * 3;
}

function selectDifferentDrivers(drivers,twoDrivers) {
    if (twoDrivers === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
    } else if (twoDrivers === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers)
    }
}

const dereva = ['Jane','Kamau','Alvin','Boscow']
//Test
console.log(returnFirstTwoDrivers(drivers))
console.log(returnLastTwoDrivers(drivers))
console.log(createFareMultiplier(5))
console.log(fareDoubler(2))
console.log(selectDifferentDrivers(dereva, returnLastTwoDrivers))