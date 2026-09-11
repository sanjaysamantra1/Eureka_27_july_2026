import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  imports: [CommonModule],
  templateUrl: './observable-demo1.html',
  styleUrl: './observable-demo1.css',
})
export class ObservableDemo1 {
  ngOnInit() {
    this.from_demo();
    this.of_demo();
    this.interval_demo();
  }

  from_demo() {
    let carArr = ['Tata', 'Honda', 'Maruti', 'Hyundai', 'Toyota'];
    let carObservable = from(carArr);
    carObservable.subscribe({
      next: (val) => console.log(val),
      error: (err) => console.log(err),
      complete: () => console.log('all value received'),
    });
  }

  of_demo() {
    let users = of(1, 2, 3, 4);
    users.subscribe((val) => console.log('value: ', val));
  }

  numbers: Observable<number> | undefined;
  even_numbers: Observable<number> | undefined;
  square_numbers: Observable<number> | undefined;

  interval_demo() {
    this.numbers = interval(1000);
    this.even_numbers = this.numbers.pipe(filter(val=>val%2==0));
    this.square_numbers = this.numbers.pipe(map(val=>val*val));
  }

  currentTime$ = interval(1000).pipe(map(() => new Date().toLocaleTimeString()));
}
