import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  imports: [],
  templateUrl: './userdetails.html',
  styleUrl: './userdetails.css',
})
export class Userdetails {
  // Read the id from Route, fetch the details & display on the screen
  user: any = signal({});
  httpClient = inject(HttpClient);
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${params['id']}`)
        .subscribe((response) => {
          this.user.set(response);
        });
    });
  }
}
