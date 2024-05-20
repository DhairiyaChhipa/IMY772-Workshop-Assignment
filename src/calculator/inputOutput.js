const convert = require("./converter");

function validOperand(x){
    if (!convert.isHexadecimal(x)) throw "Invalid operand";
    if (x.length > 3) throw "Long operand";
    return true;
}

function validAnswer(x){
    if (!convert.isHexadecimal(x)) throw "Invalid answer";
    if (x.length > 6) throw "Long answer";
    return true;
}

module.exports = {validOperand, validAnswer};