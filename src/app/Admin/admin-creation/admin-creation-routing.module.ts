import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCreationComponent } from './admin-creation.component'
const routes: Routes = [
  {
    path : '',
    component : AdminCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCreationRoutingModule { }
