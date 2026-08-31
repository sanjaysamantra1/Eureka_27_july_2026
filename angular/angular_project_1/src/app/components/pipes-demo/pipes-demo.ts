import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom_pipes/remaining-pipe';
import { OrdinalPipe } from '../../custom_pipes/ordinal-pipe';
import { CreditcardPipe } from '../../custom_pipes/creditcard-pipe';
import { AgePipe } from '../../custom_pipes/age-pipe';
import { SalutationPipe } from '../../custom_pipes/salutation-pipe';
import { FilterPipe } from '../../custom_pipes/filter-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    OrdinalPipe,
    CreditcardPipe,
    AgePipe,
    SalutationPipe,
    FilterPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  userName = 'sachin tEnDulKAr';
  salary = 5000;
  dateObj = new Date();
  user = { name: 'Virat', age: 40, add: 'Bangalore' };
  cars = ['Tata','Honda','Maruti','Hyundai','Toyota','Mahindra'];
  msg = '';

  num = 21;
  creditCardNumber = '1111222233334444';
  dob = '2022-03-15';

  employees = [
        { id: 1, name: 'Amit Sharma', role: 'Manager', salary: 85000, status: 'Active', gender: 'male' },
        { id: 2, name: 'Priya Verma', role: 'Developer', salary: 65000, status: 'Active', gender: 'female' },
        { id: 3, name: 'Rahul Mehta', role: 'Tester', salary: 38000, status: 'Inactive', gender: 'male' },
        { id: 4, name: 'Sneha Iyer', role: 'Developer', salary: 42000, status: 'Inactive', gender: 'female' },
        { id: 5, name: 'Karan Singh', role: 'Manager', salary: 52000, status: 'Active', gender: 'male' },
        { id: 6, name: 'Neha Gupta', role: 'Tester', salary: 72000, status: 'Active', gender: 'female' }
  ];
  searchText = '';
}
