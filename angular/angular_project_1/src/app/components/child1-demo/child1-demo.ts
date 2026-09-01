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
  courseName = 'Python FullStack Training';
  location = 'Pensylvania';

  locationEvent = new EventEmitter();
  sendDataToParent() {
    this.locationEvent.emit(this.location);
  }
}
