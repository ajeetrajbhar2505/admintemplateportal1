import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DTBasicComponent } from '../basic/dt-basic.component'

const routes: Routes = [
  {
    path : '',
    component : DTBasicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
