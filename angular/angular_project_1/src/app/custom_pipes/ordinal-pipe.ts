import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  // pure:false  // impure pipe
})
export class OrdinalPipe implements PipeTransform {
  transform(num: number): String {
    console.log('Ordinal Pipe Called...')
    let rem = num % 10;
    switch(rem){
      case 1 : return num+'st';break;
      case 2 : return num+'nd';break;
      case 3 : return num+'rd';break;
      default : return num+'th';break;
    }
  }
}
