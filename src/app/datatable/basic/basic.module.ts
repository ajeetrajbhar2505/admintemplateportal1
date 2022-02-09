import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DTBasicComponent } from '../basic/dt-basic.component'
import { BasicRoutingModule } from './basic-routing.module';


@NgModule({
  declarations: [
    DTBasicComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule
  ]
})
export class BasicModule { }
