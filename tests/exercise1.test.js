const {fizzBuzz} = require('../exercise1');

describe('fizzBuzz', () => {
    it('should throw an exception if you pass a invalid input', () => {
        expect(() => {fizzBuzz('a')}).toThrow();
        expect(() => {fizzBuzz('1')}).toThrow();
        expect(() => {fizzBuzz(null)}).toThrow();
        expect(() => {fizzBuzz(undefined)}).toThrow();
        expect(() => {fizzBuzz({})}).toThrow();
    });
    it('should return FizzBuzz if the input is divisiable by 3 and 5', () => {
        const result = fizzBuzz(15);
        expect(result).toBe('FizzBuzz');
    });
    it('should return Fizz if the input is only divisiable by 3', () => {
        const result = fizzBuzz(3);
        expect(result).toBe('Fizz');
    });
    it('should return Buzz if the input is only divisiable by 5', () => {
        const result = fizzBuzz(5);
        expect(result).toBe('Buzz');
    });
    it('should return input if the input is not divisiable by 3 and 5', () => {
        const result = fizzBuzz(1);
        expect(result).toBe(1);
    });
});