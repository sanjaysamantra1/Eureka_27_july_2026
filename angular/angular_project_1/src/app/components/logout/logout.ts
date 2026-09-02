import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.css',
})
export class Logout {
  constructor() {
    console.log('Logout Loaded...')
  }
  ngOnDestroy(){
    console.log('Logout is about to be destroyed...')
  }
}
