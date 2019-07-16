import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistDetailComponent } from './booklist-detail.component';

describe('BooklistDetailComponent', () => {
  let component: BooklistDetailComponent;
  let fixture: ComponentFixture<BooklistDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklistDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
