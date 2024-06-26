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
});
