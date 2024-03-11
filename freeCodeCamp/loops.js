// while loop
var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);

// for loops
var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

console.log(ourArray);

// lets iterate through odd numbers
var myArray = [];
for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}
console.log(myArray);

// lets decrement till we reach the base case
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

console.log(ourArray);

// now lets add numbers in an array
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal);

//nested for loops
function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i < arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
        return product;
    }
    var product = multiplyAll([[1, 2],[3,4],[5,6,7]]);
}

console.log(product);

//do while loop
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);

//generating random fractions with math function
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());

//generating random whole numbers with math.floor
var randomNumberBetween0and19 = Math.floor(Math.random() * 20)
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());
