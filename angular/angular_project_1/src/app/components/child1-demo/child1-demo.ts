import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1-demo',
  imports: [CommonModule],
  templateUrl: './child1-demo.html',
  styleUrl: './child1-demo.css',
  inputs: ['a','user'],
  outputs: ['locationEvent'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child1Demo {
  a: any;
  courseName:string;
  location = 'Pensylvania';
  user:any;

  locationEvent = new EventEmitter();
  sendDataToParent() {
    this.locationEvent.emit(this.location);
  }

  constructor(private cdr:ChangeDetectorRef) {
    this.courseName = 'Python FullStack Training';
    console.log('child constructor');
  }
  // ngOnChanges(myChanges:any) {
  //   console.log('child ngOnChanges',myChanges);
  // }
  // ngOnInit() {
  //   console.log('child ngOnInit');
  // }
  // ngDoCheck() {
  //   console.log('child ngDoCheck');
  //   this.cdr.markForCheck();
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
