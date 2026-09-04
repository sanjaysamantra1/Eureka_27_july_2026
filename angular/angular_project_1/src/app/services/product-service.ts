import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class ProductService {
  httpClient = inject(HttpClient);

  getAllProducts() {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
}
