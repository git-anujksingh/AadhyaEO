import { Component } from '@angular/core';
import { BookYourEvent, Status } from '../shared/BookYourEvent';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-your-event',
  templateUrl: './book-your-event.component.html',
  styleUrl: './book-your-event.component.scss'
})
export class BookYourEventComponent {
  bookYourEventForm!: FormGroup<any>;
  abc : any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let value : BookYourEvent = {
      uid : '0',
      name : 'Birthday Party'
    }
    this.buildBookYourEvent(value);
  }

  buildBookYourEvent(bookYourEvent: BookYourEvent) {
    this.bookYourEventForm = this.fb.group({
      uid: [bookYourEvent.uid],
      name: [bookYourEvent.name,[Validators.required, Validators.maxLength(100)]],
    });
  }

  get f() {
    return this.bookYourEventForm.controls;
  }


  extractBranchTypes(): BookYourEvent {
    const bookYourEvent: BookYourEvent = {
      uid: this.bookYourEventForm.value.uid,
      name: this.bookYourEventForm.value.name
    };
    return bookYourEvent;
  }
}
