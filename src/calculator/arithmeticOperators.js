const convert = require("./converter");

module.exports = {
    add(x, y){
        return convert.getHexadecimal(convert.getDecimal(x) + convert.getDecimal(y));
    },
    subtract(x, y){
        let difference = convert.getHexadecimal(convert.getDecimal(x) - convert.getDecimal(y));
        if (difference < 0) throw "Negative difference";
        return difference;
    },
    multiply(x, y){
        if (x == 0 || y == 0) return 0;
        return convert.getHexadecimal(convert.getDecimal(x) * convert.getDecimal(y));
    },
    divide(x,y){
        if (x == 0 || y == 0) throw "Division by zero";
        return convert.getHexadecimal(convert.getDecimal(x) / convert.getDecimal(y));
    }
}