import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [],
  templateUrl: './observable-demo2.html',
  styleUrl: './observable-demo2.css',
})
export class ObservableDemo2 {
  httpClient = inject(HttpClient);
  
  ngOnInit() {
    this.forkjoin_demo();
  }

  forkjoin_demo() {
    let userNames = ['sanjaysamantra1', 'ushamahesh818', 'Manish-surya', 'GurramSarika09'];
    let requests = userNames.map((userName) => {
      return this.httpClient.get(`https://api.github.com/users/${userName}`);
    });
    forkJoin(requests).subscribe((responses) => {
      console.log(responses);
    });
  }
}
