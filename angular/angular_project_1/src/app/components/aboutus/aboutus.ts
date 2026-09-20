import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  imports: [RouterLink],
  templateUrl: './aboutus.html',
  styleUrl: './aboutus.css',
})
export class Aboutus {
  router = inject(Router);
  location = inject(Location);

  doSomethingAndGoToHome() {
    console.log('Some logic Before Navigation');
    this.router.navigateByUrl('/home');
  }
  goToPreviousPage() {
    this.location.back();
  }
  goToNextPage() {
    this.location.forward();
  }
}
