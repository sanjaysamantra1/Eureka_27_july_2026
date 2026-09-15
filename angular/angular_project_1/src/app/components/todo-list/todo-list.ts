import { Observable } from 'rxjs';
import { TodoService } from './../../services/todo-service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todoService = inject(TodoService);
  todoArr: Observable<any> | undefined;

  ngOnInit() {
    this.todoArr = this.todoService.todoObs;
  }
  deleteTodo(id: any) {
    this.todoService.deleteToDo(id);
  }
}
