import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(dateStr:any): number {
    console.log(dateStr, typeof dateStr)
    let yearOfBirth = dateStr.slice(0,4);
    let currentYear = new Date().getFullYear();
    return currentYear-yearOfBirth;
  }
}
