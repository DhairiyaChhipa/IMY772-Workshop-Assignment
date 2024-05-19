const convert = require("./converter");

function add(x, y){
    return convert.decToHex(convert.hextoDec(x) + convert.hextoDec(y));
}

function subtract(x, y){
    let difference = convert.hextoDec(x) - convert.hextoDec(y);
    if (difference < 0) throw "Negative difference";
    difference = convert.decToHex(difference);
    return difference;
}

function multiply(x, y){
    if (x == 0 || y == 0) return 0;        
    return convert.decToHex(convert.hextoDec(x) * convert.hextoDec(y));
}

function divide(x,y){
    if (x == 0 || y == 0) throw "Division by zero";
    return convert.decToHex(convert.hextoDec(x) / convert.hextoDec(y));
}


module.exports = {add, subtract, multiply, divide};