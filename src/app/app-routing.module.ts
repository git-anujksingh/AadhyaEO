import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo:"e&o",
    pathMatch:"full"
  },
  {
    path:"e&o",
    loadChildren:()=> import("./features/master/master.module").then((m)=> m.MasterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
