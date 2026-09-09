import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Service()
export class EmployeeService {
  httpClient = inject(HttpClient);

  // getAllEmployees(): Observable<Employee[]> {
  //   return this.httpClient.get<Employee[]>('http://localhost:3000/employees');
  // } // service is not converting each response to Employee Class Object

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('http://localhost:3000/employees').pipe(
      map((responseArr: Employee[]) => {
        return responseArr.map((responseObj: Employee) => new Employee(responseObj));
      }),
    );
  }
}
