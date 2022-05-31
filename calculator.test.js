const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");


describe("sum test cases", () => { 
  test("can add two small positive numbers", () => {
    const expected = 5;
    const actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    const expected = 99999;
    const actual = sum(10000, 89999);
    expect(actual).toBe(expected);
    
  });

  test('can add two negative numbers', () => {
    const expected = -15;
    const actual = sum(-10, -5);
    expect(actual).toBe(expected);
    
  });

  test('can add zero', () => {
    const expected = 10000;
    const actual = sum(10000, 0);
    expect(actual).toBe(expected);
    
  });

});

describe('subtract test cases', () => {
  test('subtract a positive number from a positive number', () => {
    const expected = 10;
    const actual = subtract(100, 90);
    expect(actual).toBe(expected);
});

test('subtract a positive number from a negative number', () => {
  const expected = -110;
  const actual = subtract(-50, 60);
  expect(actual).toBe(expected);

});



});
 

describe('multiply test cases', () => {
  test('mulitply a positive number with a positive number', () => {
    const expected = 10;
    const actual = multiply(5, 2);
    expect(actual).toBe(expected);
});
test('mulitply a positive number with a negative number', () => {
  const expected = -10;
  const actual = multiply(5, -2);
  expect(actual).toBe(expected);
});


});

describe('divide test cases', () => {
  test('divide a positive number with a positive number', () => {
    const expected = 10;
    const actual = divide(100, 10);
    expect(actual).toBe(expected);
});
test('mulitply a positive number with a negative number', () => {
  const expected = -10;
  const actual = multiply(5, -2);
  expect(actual).toBe(expected);
});

});

describe('modulus test cases', () => {
  test('modulus with a positive even number and 2', () => {
    const expected = 0;
    const actual = modulus(100, 2);
    expect(actual).toBe(expected);
});
test('modulus with a positive odd number and 2', () => {
  const expected = 1;
  const actual = modulus(10001, 2);
  expect(actual).toBe(expected);
});

});

describe('even', () => {
  test('check if even is true', () => {
    const expected = true;
    const actual = even(20);
    expect(actual).toBe(expected);
});
test('check if odd is false', () => {
  const expected = false;
  const actual = even(21);
  expect(actual).toBe(expected);
});

});

describe('odd', () => {
  test('check if odd is true', () => {
    const expected = true;
    const actual = odd(287);
    expect(actual).toBe(expected);
});
test('check if odd is true', () => {
  const expected = false;
  const actual = odd(2876);
  expect(actual).toBe(expected);
});

});
