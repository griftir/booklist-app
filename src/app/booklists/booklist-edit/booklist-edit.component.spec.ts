import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistEditComponent } from './booklist-edit.component';

describe('BooklistEditComponent', () => {
  let component: BooklistEditComponent;
  let fixture: ComponentFixture<BooklistEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
