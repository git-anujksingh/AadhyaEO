import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookYourEventComponent } from './book-your-event/book-your-event.component';
import { HomeComponent } from './home/home.component';

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
        path:"book_your_event",
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
