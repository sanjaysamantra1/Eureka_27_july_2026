import { HttpDemo1 } from './../http-demo1/http-demo1';
import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { TaskList } from '../task-list/task-list';
import { ProductList } from '../product-list/product-list';
import { MyModal } from '../my-modal/my-modal';
import { Products } from '../products/products';
import { PipesDemo } from '../pipes-demo/pipes-demo';
import { ParentDemo } from '../parent-demo/parent-demo';
import { MathDemo1 } from '../math-demo1/math-demo1';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // DirectivesDemo
    // TaskList
    // ProductList
    // MyModal
    // Products
    // PipesDemo
    // ParentDemo
    // MathDemo1
    HttpDemo1
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
