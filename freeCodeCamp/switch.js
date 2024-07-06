function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(caseInSwitch())

//another instance
function x(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
             answer = "mid";
             break;
        case 7:
        case 8:
        case 9:
              answer = "low";
              break;
    }
    return answer;
}
console.log(x());
