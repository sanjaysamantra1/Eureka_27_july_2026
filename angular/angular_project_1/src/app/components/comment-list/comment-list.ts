import { CommonModule } from '@angular/common';
import { CommentService } from './../../services/comment-service';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comment-list',
  imports: [CommonModule],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentData: Observable<Comment[]> | undefined;
  commentService = inject(CommentService);

  ngOnInit() {
    this.commentData = this.commentService.getAllComments();
  }
}
