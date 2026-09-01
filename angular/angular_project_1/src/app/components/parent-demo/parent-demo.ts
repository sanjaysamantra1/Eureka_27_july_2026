import { Component, OnChanges } from '@angular/core';
import { Child1Demo } from '../child1-demo/child1-demo';
import { Child2Demo } from '../child2-demo/child2-demo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-demo',
  imports: [Child1Demo, Child2Demo, FormsModule],
  templateUrl: './parent-demo.html',
  styleUrl: './parent-demo.css',
})
export class ParentDemo  {
  a: number;
  location: string = '';

  receiveLocationData(location: string) {
    this.location = location;
  }

  constructor() {
    this.a = 10;
    console.log('Parent constructor');
  }
  // ngOnChanges() { // this will not be invoked, as it doesn't have inputs:[]
  //   console.log('Parent ngOnChanges');
  // }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('Parent ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
