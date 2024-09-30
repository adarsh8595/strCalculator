import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringCalcService {
  constructor() { }

  add(numbers: string): number {
    if (!numbers) return 0;  
    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    let delimiters = [',', '\n'];  
    let numberPart = numbers;
    if (customDelimiterMatch) {
      delimiters.push(customDelimiterMatch[1]);
      numberPart = numbers.slice(customDelimiterMatch[0].length);
    }
    const regex = new RegExp(`[${delimiters.join('')}]`);
    const numArray = numberPart.split(regex).map(num => parseInt(num, 10));
    const negativeNumbers = numArray.filter(n => n < 0);
    if (negativeNumbers.length) {
      alert(`negative numbers not allowed: ${negativeNumbers.join(', ')}`)
      throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
    return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
  }
}
