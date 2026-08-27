import { Component } from '@angular/core';
import product_data from './product_data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-products',
  imports: [FontAwesomeModule, NgxPaginationModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productArr = product_data;
  faStar = faStar;
  p: number = 1; // currentPage
}
