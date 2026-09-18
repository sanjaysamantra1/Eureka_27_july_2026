import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './model-form.html',
  styleUrl: './model-form.css',
})
export class ModelForm {
  registerForm!: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('Virat', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('Kohli', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        pincode: new FormControl(''),
      }),
    });
  }

  submitMyForm(){
    console.log(this.registerForm)
    console.log(this.registerForm.value)
  }
}
