import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSemesterComponent } from './add-semester.component'

const routes: Routes = [
  {
    path : '',
    component : AddSemesterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSemesterRoutingModule { }
