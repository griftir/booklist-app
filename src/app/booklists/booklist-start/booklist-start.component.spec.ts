import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistStartComponent } from './booklist-start.component';

describe('BooklistStartComponent', () => {
  let component: BooklistStartComponent;
  let fixture: ComponentFixture<BooklistStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
