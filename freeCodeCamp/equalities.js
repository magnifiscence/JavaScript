function x(a, b) {
    if (a == b) {
        return "equal";
    }
    return "not equal";
}
console.log(x(7, "7"));

function x(a, b) {
    if (a === b) {
        return "equal";
    }
    return "not equal";
}
console.log(x(7, "7"));