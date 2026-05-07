import {describe, expect, test} from 'vitest';
import { add, divide, multiply, substract } from './math.helper';


describe('add', () => {
test('should add two positive numbers', () => { 

    const a = 1;
    const b = 1;

    const result = add(a, b);

    expect(result).toBe(a + b);
 }) 

})

describe('substract', () => {
test('should substract two positive numbers', () => { 

    const a = -1;
    const b = 4;

    const result = substract(a, b);

    expect(result).toBe(a - b);
 }) 
})

describe('multiply', () => {
test('should multiply two positive numbers', () => { 

    const a = -31;
    const b = 12;

    const result = multiply(a, b);

    expect(result).toBe(a * b);
 }) 
})

describe('divide', () => {
test('should divide two positive numbers', () => { 

    const a = 1;
    const b = 1;

    const result = divide(a, b);

    expect(result).toBe(a / b);
 }) 
})