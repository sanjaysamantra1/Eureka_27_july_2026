import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  httpClient = inject(HttpClient);
  users: Observable<any> | undefined;

  ngOnInit() {
    this.users = this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
}
