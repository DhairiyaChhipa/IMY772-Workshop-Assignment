const convert = require("./converter");

module.exports = {
    add(x, y){
        return convert.decToHex(convert.hextoDec(x) + convert.hextoDec(y));
    },

    subtract(x, y){
        let difference = convert.hextoDec(x) - convert.hextoDec(y);
        if (difference < 0) throw "Negative difference";
        difference = convert.decToHex(difference);
        return difference;
    },

    multiply(x, y){
        if (x == 0 || y == 0) return 0;        
        return convert.decToHex(convert.hextoDec(x) * convert.hextoDec(y));
    },

    divide(x,y){
        if (x == 0 || y == 0) throw "Division by zero";
        return convert.decToHex(convert.hextoDec(x) / convert.hextoDec(y));
    }
}