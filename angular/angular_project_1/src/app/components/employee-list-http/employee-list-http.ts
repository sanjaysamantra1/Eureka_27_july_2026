import { Component, inject } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list-http',
  imports: [CommonModule],
  templateUrl: './employee-list-http.html',
  styleUrl: './employee-list-http.css',
})
export class EmployeeListHttp {
  employeeData: Observable<Employee[]> | undefined;
  employeeService = inject(EmployeeService);

  ngOnInit() {
    this.employeeData = this.employeeService.getAllEmployees();

    this.employeeService.getAllEmployees().subscribe((response) => {
      console.log(response);
    });
  }
}
