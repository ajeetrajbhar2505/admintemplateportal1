import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddSemesterRoutingModule } from './add-semester-routing.module';
import { AddSemesterComponent } from './add-semester.component'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddSemesterRoutingModule,
    NgxDatatableModule,
    NgbModule
  ]
})
export class AddSemesterModule { }
