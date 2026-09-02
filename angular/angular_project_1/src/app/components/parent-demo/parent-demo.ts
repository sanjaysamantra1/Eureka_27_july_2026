import { Component, OnChanges, ViewChild } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Login } from '../login/login';
import { Logout } from '../logout/logout';

@Component({
  selector: 'app-parent-demo',
  imports: [Child1Demo, Child2Demo, FormsModule,CommonModule, Login,Logout],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo  {
  flag : boolean = true;

  a: number;
  user:any = {name:'sanjay','role':'trainer'}
  location: string = '';
  @ViewChild('myInputBox') myInputBox: any;

  updateUser(){
    this.user.add ='Bangalore'
  }

  receiveLocationData(location: string) {
    this.location = location;
  }

  constructor() {
    this.a = 10;
    console.log('Parent constructor');
    console.log('Input Box', this.myInputBox)
  }
  // ngOnChanges() { // this will not be invoked, as it doesn't have inputs:[]
  //   console.log('Parent ngOnChanges');
  // }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  ngAfterViewInit() { // confirms that all the DOM elements are ready
    console.log('Parent ngAfterViewInit');
    console.log('Input Box', this.myInputBox)
    this.myInputBox.nativeElement.focus();
    this.myInputBox.nativeElement.style.backgroundColor='lightgreen'
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
