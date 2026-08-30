import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom_pipes/remaining-pipe';

@Component({
  selector: 'app-pipes-demo',
  imports: [CommonModule, FormsModule, RemainingPipe],
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
}
