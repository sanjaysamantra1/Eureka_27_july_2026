import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Service()
export class CommentService {
  httpClient = inject(HttpClient);

  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
