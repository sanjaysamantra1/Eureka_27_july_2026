import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskCRUD } from './task-crud';

describe('TaskCRUD', () => {
  let component: TaskCRUD;
  let fixture: ComponentFixture<TaskCRUD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCRUD],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskCRUD);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
