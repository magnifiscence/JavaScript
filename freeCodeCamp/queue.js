//stand in line
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); //converts array into string so it can be displayed
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));