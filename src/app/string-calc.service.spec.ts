import { TestBed } from '@angular/core/testing';

import { StringCalcService } from './string-calc.service';

describe('StringCalcService', () => {
  let service: StringCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringCalcService);
  });

  it('should return 0 for an empty string', () => {
    expect(service.add("")).toBe(0); 
  });

  it('should return the number itself for a single number', () => {
    expect(service.add("1")).toBe(1);
    expect(service.add("5")).toBe(5);
  });

  it('should return the sum of two comma-separated numbers', () => {
    expect(service.add("1,2")).toBe(3); 
    expect(service.add("4,7")).toBe(11);
  });

  it('should handle any amount of numbers', () => {
    expect(service.add("1,2,3")).toBe(6); 
    expect(service.add("10,20,30,40")).toBe(100);
  });

  it('should handle new lines between numbers', () => {
    expect(service.add("1\n2,3")).toBe(6); 
    expect(service.add("1\n2\n3")).toBe(6);
  });

  it('should support different delimiters', () => {
    expect(service.add("//;\n1;2")).toBe(3); 
    expect(service.add("//.\n4.5.6")).toBe(15); 
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => service.add("1,-2,3")).toThrow(new Error("negative numbers not allowed: -2"));
  });

  it('should throw an exception for multiple negative numbers', () => {
    expect(() => service.add("-1,-2,3")).toThrow(new Error("negative numbers not allowed: -1, -2"));
  });
});
