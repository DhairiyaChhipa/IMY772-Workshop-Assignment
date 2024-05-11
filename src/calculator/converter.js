module.exports = {
    isHexadecimal(x){
        return Boolean(x.match(/^0x[0-9a-f]+$/i))
    },
    isDecimal(x){
        return !isNaN(x)
    },
    getDecimal(x){
        if (!this.isHexadecimal(x)) throw "Non-decimal number";
        return parseInt(x, 16);
    },
    getHexadecimal(x){
        if (!this.isDecimal(x)) throw "Non-hexadecimal number";
        return x.toString(16).toUpperCase();
    }
};