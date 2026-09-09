import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListHttp } from './employee-list-http';

describe('EmployeeListHttp', () => {
  let component: EmployeeListHttp;
  let fixture: ComponentFixture<EmployeeListHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeListHttp],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeListHttp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
