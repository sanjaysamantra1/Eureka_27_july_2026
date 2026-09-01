import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs: ['a'],
  outputs: ['locationEvent'],
})
export class Child1Demo {
  a: any;
  courseName:string;
  location = 'Pensylvania';

  locationEvent = new EventEmitter();
  sendDataToParent() {
    this.locationEvent.emit(this.location);
  }

  constructor() {
    this.courseName = 'Python FullStack Training';
    console.log('child constructor');
  }
  ngOnChanges(myChanges:any) {
    console.log('child ngOnChanges',myChanges);
  }
  ngOnInit() {
    console.log('child ngOnInit');
  }
  // ngDoCheck() {
  //   console.log('child ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('child ngOnDestory');
  // }
}
