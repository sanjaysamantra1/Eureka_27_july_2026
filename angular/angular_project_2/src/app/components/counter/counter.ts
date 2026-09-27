import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../../actions/counter.actions';

@Component({
  imports: [CommonModule],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select((store: any) => {
      return store.countData;
    }); // selector
  }

  increment_val(){
    this.store.dispatch(increment())
  }
  decrement_val(){
    this.store.dispatch(decrement())
  }
}
