import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {
  userName = 'Virat Kohli';
  img_url = 'https://static.toiimg.com/photo/119129076.cms';
  flag = true;

  toggleFlag() {
    this.flag = !this.flag;
  }
  maximum_length = 10;

  num1 = 100;
  num2 = 200;

  addResult: number = 0;
  addition(a: string, b: string) {
    this.addResult = +a + +b;
  }
}
