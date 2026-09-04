import { Observable } from 'rxjs';
import { ProductService } from './../../services/product-service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-http',
  imports: [CommonModule],
  templateUrl: './product-http.html',
  styleUrl: './product-http.css',
})
export class ProductHttp {
  productService = inject(ProductService);
  products: Observable<any> | undefined;

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }
}
// To Read data from observable in typescript file we use .subscribe()
// To Read data from observable in HTML file we use async pipe
