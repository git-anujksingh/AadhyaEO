import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookYourEventComponent } from './book-your-event/book-your-event.component';
import { HomeComponent } from './home/home.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JoinUsComponent } from './join-us/join-us.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {
        path: "",
        redirectTo : "home",
        pathMatch : "full"
      },
      {
        path:"home",
        component: HomeComponent
      },
      {
        path:"work",
        component: OurWorkComponent
      },
      {
        path:"contact",
        component: ContactUsComponent
      },
      {
        path:"join",
        component: JoinUsComponent
      },
      {
        path:"book_event",
        component: BookYourEventComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
