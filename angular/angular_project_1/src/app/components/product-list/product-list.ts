import { Component } from '@angular/core';
import product_data from './product_data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productArr = product_data;

  categoryArr = ['All', ...product_data.map((product) => product.category),'Kids Clothing'];
  categorySet = new Set(this.categoryArr);

  constructor() {
    console.log(this.categorySet);
  }

  selectedCategory = 'All';
  get filteredProducts() {
    return product_data.filter((product) => {
      if (this.selectedCategory == 'All') {
        return product;
      } else {
        return product.category === this.selectedCategory;
      }
    });
  }
}
