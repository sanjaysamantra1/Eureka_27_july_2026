import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule,CommonModule],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  hasChanges:boolean = true;

  user = {
    firstName : 'Virat'
  }

  submitUserForm(formData:any){
    this.hasChanges = false;
  }
}
