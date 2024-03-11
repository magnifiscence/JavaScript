//parseInt function
function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");


//using parseint with radix that specifies the base of the number
//as an example lets convert a binary number to an integer specifying the radix as 2
function convertToInteger(str) {
    return parseInt(str, 2)
}
convertToInteger("10011");

// lets use the condional ternary operator
// lets consider the function below
function checkEqual(a, b) {
    if(a === b) {
        return true;
    }
    else {
        return false;
    }
}
checkEqual(1, 2); //this will be equal to

// condition ? statement-if-true : statement-if-false
function checkEqual(a, b) {
    return a === b ? true : false
    return a === b;
}
checkEqual(1, 2);

// nested ternary operators
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(10));

//NB you  cannot re assign a const variable but you can how ever reassign or muted a const variable that is an array
// you can prevent a constant vsriable from being mutated e.g an object by using the Object.freeze() function
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.loog(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


// using arrow functions to write concise anonymos(no name) function or whose name is function
//this is the anonymous function
/*
const magic = function() {
    return new Date();   
};
*/
//lets redo it it with the arrow function
const magic = () => new Date(); //which is similar to
/*
const magic = () => {
    return new Date();
}
*/

//writing arrow functions with parameters
/*
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));
*/
//lets rewrite it as an arrow function
var myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//writing higher order arrow functions
//arrow functions are very important in defining functions that use other functions as parameters
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squarealaist = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//use the rest operator (...) with function parameters which allow your function to take a variable number of parameters
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3, 4));

// the spread operator
const arr1 = ['JAN', 'FEB', 'MAR', 'MAY'];
let arr2;
(function () {
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);

// use destructuring assignment to assign variables from Objects
var voxel = {x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const { x : a, y : b, z : c} = voxel; // a = 3.6, b = 7.4, c = 6.54

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTemOfTmrw(avgTemperatures) {
    "use strict";
    const { tomorrow : tempOfTomorrow } = avgTemperature;
    return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));