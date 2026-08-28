import { Component } from '@angular/core';
import product_data from './product_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {NgxPaginationModule} from 'ngx-pagination';
import Swal from 'sweetalert2';
import Snackbar from 'awesome-snackbar';
import { CharOnly } from '../../custom_directives/char-only';
import { AlphaNumeric } from '../../custom_directives/alpha-numeric';

@Component({
  selector: 'app-products',
  imports: [
    FontAwesomeModule,
    NgxPaginationModule,
    CharOnly,
    AlphaNumeric
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productArr = product_data;
  faStar = faStar;
  p: number = 1; // currentPage

  openAlert(){
    Swal.fire('Good job!', 'You clicked the button!', 'success');
  }
  openSnackBar(){
    new Snackbar('Helloooo, Good Morning',
      { position: 'top-center', theme: 'light', timeout: 5000, actionText: 'X' }
    );
  }
}
