const convert = require("./converter");

module.exports = {
    validOperands(x,y){
        // Correct type

        if (!convert.isHexadecimal(x) && !convert.isHexadecimal(y)) throw "Invalid operands";
        if (!convert.isHexadecimal(x)) throw "Invalid operand 1";
        if (!convert.isHexadecimal(y)) throw "Invalid operand 2";

        // Correct length
        if (x.length > 3 && y.length > 3) throw "Long operands";
        if (x.length > 3) throw "Long operand 1";
        if (y.length > 3) throw "Long operand 2";

        return true;
    },

    validAnswer(x){
        // Correct type
        if (!convert.isHexadecimal(x)) throw "Invalid answer";

        // Correct length
        if (x.length > 6) throw "Long answer";

        return true;
    }
};