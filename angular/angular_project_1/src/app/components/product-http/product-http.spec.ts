import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHttp } from './product-http';

describe('ProductHttp', () => {
  let component: ProductHttp;
  let fixture: ComponentFixture<ProductHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHttp],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
