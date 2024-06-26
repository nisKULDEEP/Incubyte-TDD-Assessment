import add from "./stringCalculator";

describe('StringCalculator', () => {

    let calculator:any;

    beforeEach(() => {
      calculator = add;
    });

  test('returns 0 for an empty string', () => {
    expect(calculator("")).toBe(0);
  });

  test('returns the number for a single number input', () => {
    expect(calculator("1")).toBe(1);
  });
 
  test('returns the sum for two numbers', () => {
    expect(calculator("1,2")).toBe(3);
  });

  test('returns the sum for multiple numbers', () => {
    expect(calculator("1,2,3,4,5")).toBe(15);
  });
  
  test('handles new lines between numbers', () => {
    expect(calculator("1\n2,3")).toBe(6);
  });

  test('supports different delimiters', () => {
    expect(calculator("//;\n1;2")).toBe(3);
    expect(calculator("//|\n1|2|3")).toBe(6);
    expect(calculator("//***\n1***2***3")).toBe(6);
  });

  test('throws an exception for negative numbers', () => {
    expect(() => calculator("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });

  test('throws an exception with all negative numbers', () => {
    expect(() => calculator("1,-2,3,-4")).toThrow("negative numbers not allowed: -2, -4");
  });
});

