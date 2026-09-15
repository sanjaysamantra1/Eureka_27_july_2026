import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-todo-add',
  imports: [],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css',
})
export class TodoAdd {
  todoService = inject(TodoService);

  addToDo(todoText: string) {
    this.todoService.addNewTodo({ value: todoText });
  }
}
