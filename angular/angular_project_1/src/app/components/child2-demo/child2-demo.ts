import { Component } from '@angular/core';

@Component({
  selector: 'app-child2-demo',
  imports: [],
  templateUrl: './child2-demo.html',
  styleUrl: './child2-demo.css',
  inputs: ['aChild2', 'courseName'],
})
export class Child2Demo {
  aChild2: any;
  courseName: string | undefined;
}
