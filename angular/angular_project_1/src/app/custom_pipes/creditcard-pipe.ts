import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcard',
})
export class CreditcardPipe implements PipeTransform {
  transform(cardNumber: string): string {
    let arr = [];

    for (let i = 0; i < cardNumber.length; i = i + 4) {
      let part = cardNumber.substr(i, 4);
      arr.push(part);
    }
    return arr.join('-'); // arr = ['1111','2222','3333','4444']
  }
}
