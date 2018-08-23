import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateTodoComponent } from './add-or-update-todo.component';

describe('AddOrUpdateTodoComponent', () => {
  let component: AddOrUpdateTodoComponent;
  let fixture: ComponentFixture<AddOrUpdateTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
