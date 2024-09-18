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
      hostName : '',
      contact : undefined,
      eventType : '',
      attendees : 10,
      eventStage : '',
      catering : true,
      email : ''
    }
    this.buildBookYourEvent(value);
  }

  buildBookYourEvent(bookYourEvent: BookYourEvent) {
    this.bookYourEventForm = this.fb.group({
      uid: [bookYourEvent.uid],
      hostName: [bookYourEvent.hostName, [Validators.required]],
      contact: [bookYourEvent.contact, [Validators.required]],
      eventType: [bookYourEvent.eventType,[Validators.required]],
      attendees: [bookYourEvent.attendees,[Validators.required, Validators.maxLength(3), Validators.min(10)]],
      eventStage: [bookYourEvent.eventStage,[Validators.required]],
      catering: [bookYourEvent.catering],
      eventDescription: [bookYourEvent.eventDescription],
      email: [bookYourEvent.email, [Validators.email]]
    });
  }

  get f() {
    return this.bookYourEventForm.controls;
  }


  submitResponse(responseValue: any){
    let response = responseValue.value;
    window.alert("Our Team Will Contact You Shortly !")
  }
}
