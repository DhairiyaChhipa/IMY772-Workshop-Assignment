test('Dividing by zero', () => {
    expect(() => divide("B78", "0")).toThrow('You cannot divide by zero');
});

test('Entering a non-hexadecimal number as operand 1', () => {
    expect(() => divide("87D9FYHYL", "2BC")).toThrow('A non-hexadecimal number was entered');
});

test('Entering a non-hexadecimal number as operand 2', () => {
    expect(() => divide("2BC", "87D9FYHYL")).toThrow('A non-hexadecimal number was entered');
});

test('Entering negative number as operand 1', () => {
    expect(() => divide("-B78", "2BC")).toThrow('A negative number was entered');
});

test('Entering a negative number as operand 2', () => {
    expect(() => divide("B78", "-2BC")).toThrow('A negative number was entered');
});