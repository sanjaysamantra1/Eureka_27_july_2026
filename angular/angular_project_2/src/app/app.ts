import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MathComponent } from './components/math-component/math-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MathComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_project_2');
}
