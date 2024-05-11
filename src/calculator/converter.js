const hexadecimalCode = /^[a-fA-F0-9]+$/;

module.exports = {
    isHexadecimal(x){
        return hexadecimalCode.test(x);
    },

    isDecimal(x){
        return !isNaN(Number(x));
    },

    decToHex(x){
        if (!this.isDecimal(x)) throw "Non-decimal number";
        return x.toString(16).toUpperCase();
    },

    hextoDec(x){
        if (!this.isHexadecimal(x)) throw "Non-hexadecimal number";
        return parseInt(x, 16);
    }
};