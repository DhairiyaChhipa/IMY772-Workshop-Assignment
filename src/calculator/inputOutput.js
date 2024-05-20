const convert = require("./converter");

function validOperand(value){
    if (!convert.isHexadecimal(value)) throw "Invalid operand";
    if (value.length > 3) throw "Long operand";
    return true;
}

function validAnswer(value){
    if (!convert.isHexadecimal(value)) throw "Invalid answer";
    if (value.length > 6) throw "Long answer";
    return true;
}

module.exports = {validOperand, validAnswer};