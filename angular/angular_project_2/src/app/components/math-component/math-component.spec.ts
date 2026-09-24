import { Component } from '@angular/core';
import { MathComponent } from './math-component';

describe('Test Suite for Math Component',()=>{  // Test Suite = group of tests
  let mathComponent = new MathComponent();

  it('Should verify Add Functionality',()=>{ // Test Case-1
    expect(mathComponent.add(10,20)).toBe(30);
    expect(mathComponent.add(-10,20)).toBe(10);
    expect(mathComponent.add(-10,-20)).toBe(-30);
    expect(mathComponent.add(10,-20)).toBe(-10);
  })

  it('Should verify Subtract Functionality',()=>{ // Test Case-2
    expect(mathComponent.sub(20,10)).toBe(10);
  })

  it('Should verify multiplication Functionality',()=>{
    expect(mathComponent.mul(20,10)).toBe(200);
  })

  it('Should verify multiplication Functionality',()=>{
    expect(mathComponent.sumofDigits(125)).toBe(8);
  })

  it('Should verify add new car Functionality',()=>{
    expect(mathComponent.cars).toBeDefined();
    expect(mathComponent.cars).toBeInstanceOf(Array);
    expect(mathComponent.cars.length).toBe(2);
    expect(mathComponent.cars).toEqual(['Tata', 'Honda']);
    expect(mathComponent.cars).toContain('Tata')
    expect(mathComponent.cars).not.toContain('Maruti')

    mathComponent.addNewCar('Maruti');

    expect(mathComponent.cars).toBeDefined();
    expect(mathComponent.cars).toBeInstanceOf(Array);
    expect(mathComponent.cars.length).toBe(3);
    expect(mathComponent.cars).toEqual(['Tata', 'Honda','Maruti']);
    expect(mathComponent.cars).toContain('Tata')
    expect(mathComponent.cars).toContain('Maruti')
    expect(mathComponent.cars).not.toContain('Toyota')
  })

})
