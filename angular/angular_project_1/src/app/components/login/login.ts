import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  timerId:any;
  constructor() {
    console.log('Login Loaded...');
    this.timerId = setInterval(() => {
      console.log('I am interval from login component');
    }, 1000);
  }
  ngOnDestroy() {
    console.log('Login is about to be destroyed...');
    clearInterval(this.timerId)
  }
}
