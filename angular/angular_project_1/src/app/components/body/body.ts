import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { TaskList } from '../task-list/task-list';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // DirectivesDemo
    TaskList
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
