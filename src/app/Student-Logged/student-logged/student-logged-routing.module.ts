import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentLoggedComponent } from './student-logged.component'

const routes: Routes = [
  {
    path : '',
    component : StudentLoggedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentLoggedRoutingModule { }
