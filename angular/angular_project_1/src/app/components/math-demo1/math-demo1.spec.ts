import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathDemo1 } from './math-demo1';

describe('MathDemo1', () => {
  let component: MathDemo1;
  let fixture: ComponentFixture<MathDemo1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathDemo1],
    }).compileComponents();

    fixture = TestBed.createComponent(MathDemo1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
