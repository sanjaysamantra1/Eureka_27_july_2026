import { Component } from '@angular/core';
import { Databinding } from '../databinding/databinding';
import { DirectivesDemo } from '../directives-demo/directives-demo';
import { TaskList } from '../task-list/task-list';
import { ProductList } from '../product-list/product-list';
import { MyModal } from '../my-modal/my-modal';
import { Products } from '../products/products';

@Component({
  selector: 'app-body',
  imports: [
    // Databinding,
    // DirectivesDemo
    // TaskList
    // ProductList
    // MyModal
    Products
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
