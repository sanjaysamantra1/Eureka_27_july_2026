import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
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
