import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookYourEventComponent } from './book-your-event.component';

describe('BookYourEventComponent', () => {
  let component: BookYourEventComponent;
  let fixture: ComponentFixture<BookYourEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookYourEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookYourEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
