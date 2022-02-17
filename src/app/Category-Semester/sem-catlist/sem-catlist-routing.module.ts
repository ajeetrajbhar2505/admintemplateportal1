import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SemCatlistComponent } from './sem-catlist.component'

const routes: Routes = [
  {
    path : '',
    component : SemCatlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SemCatlistRoutingModule { }
