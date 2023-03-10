import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { StudentsComponent } from '../students/students.component'


@NgModule({
  declarations: 
  [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    NgxDatatableModule,
    NgbModule
  ],
})
export class StudentsModule { }
