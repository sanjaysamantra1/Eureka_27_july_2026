import { ModelForm } from './../model-form/model-form';
import { FormDemo1 } from './../form-demo1/form-demo1';
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
import { ProductHttp } from '../product-http/product-http';
import { CommentList } from '../comment-list/comment-list';
import { EmployeeListHttp } from '../employee-list-http/employee-list-http';
import { ObservableDemo1 } from '../observable-demo1/observable-demo1';
import { ObservableDemo2 } from '../observable-demo2/observable-demo2';
import { ObservableDemo3 } from '../observable-demo3/observable-demo3';
import { SubjectDemo1 } from '../subject-demo1/subject-demo1';
import { TodoList } from '../todo-list/todo-list';
import { TodoAdd } from '../todo-add/todo-add';
import { SignalDemo1 } from '../signal-demo1/signal-demo1';
import { SignalDemo2 } from '../signal-demo2/signal-demo2';
import { TemplateForm } from '../template-form/template-form';

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
    // HttpDemo1
    // ProductHttp
    // CommentList
    // EmployeeListHttp
    // ObservableDemo1
    // ObservableDemo2
    // ObservableDemo3
    // SubjectDemo1
    // TodoList,TodoAdd,
    // SignalDemo1
    // SignalDemo2
    // FormDemo1
    // TemplateForm
    ModelForm
  ],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}

