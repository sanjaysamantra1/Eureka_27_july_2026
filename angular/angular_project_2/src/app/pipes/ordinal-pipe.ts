import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value === null || value === undefined || isNaN(Number(value))) {
      return '';
    }
    const num = Number(value);
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const remainder = num % 100;
    // Handle exceptions for 11, 12, 13, and determine standard suffix
    const suffix = suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
    return `${num}${suffix}`;
  }
}
