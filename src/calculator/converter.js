const hexadecimalCode = /^[a-fA-F0-9]+$/;

function isHexadecimal(x){
    return hexadecimalCode.test(x);
}

function isDecimal(x){
    return !isNaN(Number(x));
}

function decToHex(x){
    if (!this.isDecimal(x)) throw "Non-decimal number";
    return x.toString(16).toUpperCase();
}

function hextoDec(x){
    if (!this.isHexadecimal(x)) throw "Non-hexadecimal number";
    return parseInt(x, 16);
}

module.exports = {isHexadecimal, isDecimal, decToHex, hextoDec};