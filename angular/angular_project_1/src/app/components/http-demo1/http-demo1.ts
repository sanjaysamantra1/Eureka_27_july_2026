import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.html',
  styleUrl: './http-demo1.css',
})
export class HttpDemo1 {
  // How to fetch data From BackEnd API
  user_api = 'https://jsonplaceholder.typicode.com/users';
  httpClient = inject(HttpClient);

  ngOnInit() {
    this.fetch_Data_javascript();
    this.fetch_Data_angular();
  }

  fetch_Data_javascript() {
    let userPromise = fetch(this.user_api); // fetch() returns a promise
    userPromise.then(
      (response) => {
        response.json().then((userArr) => {
          console.log(userArr);
        });
      },
      (error) => {
        console.log(error);
      },
    );
  }
  fetch_Data_angular() {
    // httpClient.get() returns observable
    this.httpClient.get(this.user_api).subscribe((response) => {
      console.log(response);
    });
  }
}
