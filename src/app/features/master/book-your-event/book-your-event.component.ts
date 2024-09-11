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
  cateringValue : boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let value : BookYourEvent = {
      uid : '0',
      eventType : '',
      attendees : 10,
      eventStage : '',
      catering : true
    }
    this.buildBookYourEvent(value);
  }

  buildBookYourEvent(bookYourEvent: BookYourEvent) {
    this.bookYourEventForm = this.fb.group({
      uid: [bookYourEvent.uid],
      eventType: [bookYourEvent.eventType,[Validators.required]],
      attendees: [bookYourEvent.attendees,[Validators.required, Validators.maxLength(3), Validators.min(10)]],
      eventStage: [bookYourEvent.eventStage,[Validators.required]],
      catering: [bookYourEvent.catering],
      eventDescription: [bookYourEvent.eventDescription]
    });
  }

  get f() {
    return this.bookYourEventForm.controls;
  }


  extractBranchTypes(): BookYourEvent {
    const bookYourEvent: BookYourEvent = {
      uid: this.bookYourEventForm.value.uid,
      eventType: this.bookYourEventForm.value.eventType,
      attendees: this.bookYourEventForm.value.attendees,
      eventStage: this.bookYourEventForm.value.eventStage,
      catering: this.bookYourEventForm.value.catering
    };
    return bookYourEvent;
  }

  submitResponse(responseValue: any){
    let response = responseValue.value;
    window.alert("Our Team Will Contact You Shortly !")
  }
}
