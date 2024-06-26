import add from "./stringCalculator";

describe('StringCalculator', () => {

    let calculator:any;

    beforeEach(() => {
      calculator = add;
    });

  test('returns 0 for an empty string', () => {
    expect(calculator.add("")).toBe(0);
  });

 
});
