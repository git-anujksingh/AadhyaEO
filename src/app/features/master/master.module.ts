import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { BookYourEventComponent } from './book-your-event/book-your-event.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { HomeComponent } from './home/home.component';
import { CommonModuleModule } from '../../common/common-module/common-module.module';


@NgModule({
  declarations: [
    BookYourEventComponent,
    ContactUsComponent,
    JoinUsComponent,
    OurWorkComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CommonModuleModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
