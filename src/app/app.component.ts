import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router){}

  navigate(nav: string){
    switch (nav) {
      case 'home': {
        this.router.navigate(['/e&o/home']);
        break;
      }
      case 'our_work': {
        this.router.navigate(['/e&o/work']);
        break;
      }
      case 'contact': {
        this.router.navigate(['/e&o/contact']);
        break;
      }
      case 'join': {
        this.router.navigate(['/e&o/join']);
        break;
      }
      case 'book_event': {
        this.router.navigate(['/e&o/book_event']);
        break;
      }
      default:
        break;
    }
  }
}
