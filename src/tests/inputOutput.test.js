const inputOutput = require("../calculator/inputOutput");
const multiply = require("../calculator/arithmeticOperators").multiply;

// =================== INPUT ===================
// Testing input type
test('Entering a non-hexadecimal number for both operands', () => {
    expect(() => inputOutput.validOperands("2BCSD609HM", "87D9FYHYL")).toThrow("Invalid operands");
});

test('Entering a non-hexadecimal number as operand 1', () => {
    expect(() => inputOutput.validOperands("87D9FYHYL", "2BC")).toThrow("Invalid operand 1");
});

test('Entering a non-hexadecimal number as operand 2', () => {
    expect(() => inputOutput.validOperands("2BC", "87D9FYHYL")).toThrow("Invalid operand 2");
});

// Testing input length
test('Entering two hexadecimal operands that are longer than 3 characters', () => {
    expect(() => inputOutput.validOperands("2BDF", "8CD5")).toThrow("Long operands");
});

test('Entering a hexadecimal operand 1 that is longer than 3 characters', () => {
    expect(() => inputOutput.validOperands("8CD5", "2B")).toThrow("Long operand 1");
});

test('Entering a hexadecimal operand 2 that is longer than 3 characters', () => {
    expect(() => inputOutput.validOperands("2B", "8CD5")).toThrow("Long operand 2");
});

// =================== OUTPUT ===================
// Testing output type
test('Output is a hexadecimal number', () => {
    expect(() => inputOutput.validOperands(multiply("8AB", "85"))).not.toThrow("Invalid answer");
});

// Testing output length
test('Output longer than 6 characters', () => {
    expect(() => inputOutput.validAnswer(multiply("8AB", "8CD5"))).toThrow("Long answer");
});
