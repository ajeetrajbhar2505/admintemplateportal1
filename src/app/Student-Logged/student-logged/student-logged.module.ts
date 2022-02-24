import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentLoggedComponent } from './student-logged.component'
import { StudentLoggedRoutingModule } from './student-logged-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    StudentLoggedComponent
  ],
  imports: [
    CommonModule,
    StudentLoggedRoutingModule,
    NgxDatatableModule,
    NgbModule
    
  ]
})
export class StudentLoggedModule { }
