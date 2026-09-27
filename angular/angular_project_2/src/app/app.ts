import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MathComponent } from './components/math-component/math-component';
import { MaterialDemo } from './components/material-demo/material-demo';
import { Counter } from './components/counter/counter';
import { TaskCRUD } from './components/task-crud/task-crud';
import { EmployeeList } from './components/employee-list/employee-list';
import { EmployeeAdd } from './components/employee-add/employee-add';

@Component({
  selector: 'app-root',
  imports: [
    // MathComponent,
    // MaterialDemo,
    // Counter,
    // TaskCRUD
    EmployeeList,
    EmployeeAdd
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular_project_2');

  processData(data: any) {
    console.log('Processing data:', data);
    return data.length;
  }
  fetchData() {
    const data = ['item1', 'item2', 'item3'];
    return this.processData(data);
  }
}
