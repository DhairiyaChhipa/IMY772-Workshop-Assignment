const directory = "../src/calculator"
const inputOutput = require(`${directory}/inputOutput`);
const evaluate = require("../src/calculator/evaluator");

// =================== INPUT ===================
// Testing input type
test('Long operands standalone', () => {
    expect(() => inputOutput.validOperand("8HL")).toThrow("Invalid operand");
});

// // Testing input length
test('Long operands standalone', () => {
    expect(() => inputOutput.validOperand("41B3")).toThrow("Long operand");
});

test('Long operands', () => {
    expect(() => evaluate.evaluateExpression("41B3 + (1A3B * 12)")).toThrow("Long operand");
});

test('Long operands', () => {
    expect(() => evaluate.evaluateExpression("2B + 8CD5")).toThrow("Long operand");
});

test('Long operands', () => {
    expect(() => evaluate.evaluateExpression("8CD5 + 2B")).toThrow("Long operand");
});

test('Long operands', () => {
    expect(() => evaluate.evaluateExpression("2BDF + 8CD5")).toThrow("Long operand");
});

// =================== OUTPUT ===================
// Testing output type
test('Long operands standalone', () => {
    expect(() => inputOutput.validAnswer("41X3")).toThrow("Invalid answer");
});

test('Output is a hexadecimal value', () => {
    expect(() => evaluate.evaluateExpression("8AB * 85")).not.toThrow("Invalid answer");
});

// Testing output length
test('Long answer standalone', () => {
    expect(() => inputOutput.validAnswer("41B3CB3")).toThrow("Long answer");
});

test('Long answer in an evaluation', () => {
    expect(() => evaluate.evaluateExpression("DDD * 8AB * DDD)")).toThrow("Long answer");
});