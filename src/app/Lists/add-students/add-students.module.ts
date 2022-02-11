import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { AddStudentsComponent } from '../add-students/add-students.component'
import  { AddStudentsRoutingModule} from '../add-students/add-students-routing.module'

@NgModule({
  declarations: 
  [
    AddStudentsComponent
  ],
  imports: [
    CommonModule,
    AddStudentsRoutingModule,
    NgxDatatableModule,
    NgbModule
  ],
})
export class AddStudentsModule { }
