import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  selection = 'All';

  tasks = [
    { id: 1, title: 'Complete Angular assignment', completed: false },
    { id: 2, title: 'Review pull requests', completed: true },
    { id: 3, title: 'Prepare project report', completed: false },
    { id: 4, title: 'Attend team meeting', completed: true },
    { id: 5, title: 'Update documentation', completed: false },
  ];

  getFilteredTasks() {
    switch (this.selection) {
      case 'Completed':
        return this.tasks.filter((task) => task.completed);
      case 'Pending':
        return this.tasks.filter((task) => !task.completed);
      default:
        return this.tasks;
    }
  }

  get pendingCount() {
    return this.tasks.filter((task) => !task.completed).length;
  }
}
