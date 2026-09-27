import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteEmployee, fetchEmployees } from '../../actions/employee.actions';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-employee-list',
  styleUrl: './employee-list.css',
  templateUrl: './employee-list.html',
})
export class EmployeeList {
  employees$: Observable<Employee[]> | undefined;
  constructor(private store: Store) {
    this.employees$ = this.store.select((state: any) => {
      return state.employeeData;
    });
  }
  ngOnInit() {
    // this.store.dispatch({ type: '[EmployeeList Page] Fetch Employees' });
    this.store.dispatch(fetchEmployees());
  }
  deleteEmp(id: string) {
    const flag = confirm('Are you sure, You want to delete this record?');
    if (flag) {
      this.store.dispatch(deleteEmployee({ id }));
    }
  }
}
