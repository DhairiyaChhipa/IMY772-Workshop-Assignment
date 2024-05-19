(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const convert = require("../src/calculator/converter");

init();

function init() {
    document.getElementById("result").value = null;
    document.getElementById("hexToDec").value = null;
    document.getElementById("decToHex").value = null;
    document.getElementById("hexToDec-result").innerText = "";
    document.getElementById("decToHex-result").innerText = "";

    const list = document.querySelectorAll(".btn");

    for (let i = 0; i < list.length; i++)
    {
        switch(i){
            case 0:
                addEvent("click", list[i], ()=>{
                    clear();
                });
                break;
            case 5:
                addEvent("click", list[i], ()=>{
                    let input = document.getElementById("result").value;    
                    if (input != null) {
                        document.getElementById("result").value = input.substring(0, input.length - 1);   
                    }
                });
                break;
            default:
                addEvent("click", list[i], ()=>{
                    display(list[i].dataset.operation);
                });
                break;
        }
    }

    addEvent("keyup", document.getElementById("hexToDec"), ()=>{
        if (document.getElementById("hexToDec").value != null) {
            convertToDec(document.getElementById("hexToDec").value);
        }
    })

    addEvent("keyup", document.getElementById("decToHex"), ()=>{
        if (document.getElementById("decToHex").value != null) {
            convertToHex(document.getElementById("decToHex").value);
        }
    })
}

function addEvent(event, element, func){
    element.addEventListener(event, func);
}

function display(val) {
    document.getElementById("result").value += val;
}

function solve() { 
    let x = document.getElementById("result").value;
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
} 

function clear() { 
    document.getElementById("result").value = "";
}

function convertToDec(val) {
    try{
        if (val == "" || val == null){
            document.getElementById("hexToDec-result").innerText = "";
            return;
        }
        let result = convert.hextoDec(val);
        document.getElementById("hexToDec-result").innerText = result;
    } catch(error) {
        document.getElementById("hexToDec-result").innerText = error;
    }
}

function convertToHex(val) {
    try{
        if (val == "" || val == null){
            document.getElementById("decToHex-result").innerText = "";
            return;
        }
        let result = convert.decToHex(parseInt(val));
        document.getElementById("decToHex-result").innerText = result;

    } catch(error) {
        document.getElementById("decToHex-result").innerText = error;
    }
}
},{"../src/calculator/converter":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
