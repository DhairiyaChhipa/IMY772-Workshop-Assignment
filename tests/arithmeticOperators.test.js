const convert = require("./calculator/converter");
const add = require("./calculator/arithmeticOperators").add;
const subtract = require("./calculator/arithmeticOperators").subtract;
const multiply = require("./calculator/arithmeticOperators").multiply;
const divide = require("./calculator/arithmeticOperators").divide;

// =================== CONVERSIONS ===================
// Hexadecimal -> Decimal Conversion
test('8AB equal 2219', () => {
    expect(convert.hextoDec("8AB")).toEqual(2219);
});
  
test('B78 to equal 2936', () => {
    expect(convert.hextoDec("B78")).toEqual(2936);
});

test('Wrong input for hexadecimal to decimal conversion', () => {
    expect(() => convert.hextoDec("2219T")).toThrow("Non-hexadecimal number");
});

test('Valid input for hexadecimal to decimal conversion', () => {
    expect(() => convert.hextoDec(2219)).not.toThrow("Non-hexadecimal number");
});

// Decimal -> Hexadecimal Conversion
test('2219 equal 8AB', () => {
    expect(convert.decToHex(2219)).toMatch("8AB");
});
  
test('2936 to equal B78', () => {
    expect(convert.decToHex(2936)).toMatch("B78");
});

test('Wrong input for decimal to hexadecimal conversion', () => {
    expect(() => convert.decToHex("B78")).toThrow("Non-decimal number");
});

// =================== ARITHMETIC OPERATIONS ===================
// Addition
test('adds B78 + 8AB to equal 1423', () => {
    expect(add("8AB", "B78")).toMatch("1423");
});

// Subtraction
test('subtracts B78 - 8AB to equal 2CD', () => {
    expect(subtract("B78", "8AB")).toMatch("2CD");
});

test('Negative difference', () => {
    expect(() => subtract("8AB", "B78")).toThrow("Negative difference");
});

// Multiplication
test('multiplies B78 * 8AB to equal 636928', () => {
    expect(multiply("B78", "8AB")).toMatch("636928");
});

// Division
test('divides B78 / 2 to equal 5BC', () => {
    expect(divide("B78", "2")).toMatch("5BC");
});

test('Dividing by zero', () => {
    expect(() => divide("B78", "0")).toThrow("Division by zero");
});