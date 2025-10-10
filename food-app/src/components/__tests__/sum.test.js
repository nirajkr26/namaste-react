import { sum } from "../sum"

test("sum function calculates the sum of two numbers", () => {

    const result = sum(5, 6);
    
    // assertion
    expect(result).toBe(11);
});
