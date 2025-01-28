import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";
import { fizzBuzz } from "../src/intro";

describe('max', () => {
    it('should return the first argument if it is greater', () => {
        // AAA
        // Arrange: Turn on the TV
        const a = 2;
        const b = 1;

        // Act: Press the power button
        const result = max(a, b);

        // Assert: Verify TV is on
        expect(result).toBe(a);
    })
})

// The above test can be simplified to the following:
describe('max', () => {
    it('should return the first argument if it is greater', () => {
        expect(max(2, 1)).toBe(2);
    })
});

describe('max', () => {
    it('should return the second argument if it is greater', () => {
        expect(max(1, 2)).toBe(2);
    })
});

describe('max', () => {
    it('should return the first argument if arguments are equal', () => {
        expect(max(1, 1)).toBe(1);
    })
});

// fizzBuzz tests
describe('fizzBuzz', () => {
    it('should return FizzBuzz if the value is divisible by 3 & 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
});

describe('fizzBuzz', () => {
    it('should return Fizz if the value is divisible by 3', () => {
        expect(fizzBuzz(6)).toBe('Fizz');
    })
});

describe('fizzBuzz', () => {
    it('should return Buzz if the value is divisible by 5', () => {
        expect(fizzBuzz(10)).toBe('Buzz');
    })
});

describe('fizzBuzz', () => {
    it('should return the value in a string if it is not divisible by 3 &| 5', () => {
        expect(fizzBuzz(2)).toBe('2');
    })
});