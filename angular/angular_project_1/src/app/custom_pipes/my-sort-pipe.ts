import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySort',
  pure: false,
})
export class MySortPipe implements PipeTransform {
  transform(arr: any[]): any[] {
    console.log('Sort Pipe called...');
    return arr.sort((a, b) => a - b);
  }
}
