import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math-service';
import { LoggerService } from '../../services/logger-service';

@Component({
  selector: 'app-math-demo1',
  imports: [],
  templateUrl: './math-demo1.html',
  styleUrl: './math-demo1.css',
})
export class MathDemo1 {
  // mathService = new MathService(); // Manual way of creating object
  mathService = inject(MathService);
  logger = inject(LoggerService);

  ngOnInit() {
    console.log('ngOnInit from MathDemo1');
    const arr = [20, 30, 50, 10, 40];

    console.log(this.mathService.sum(arr));
    console.log(this.mathService.average(arr));
    console.log(this.mathService.indexOfMax(arr));
  }
}
