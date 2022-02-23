import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminCreationRoutingModule } from './admin-creation-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminCreationRoutingModule,
    NgxDatatableModule,
    NgbModule
  ]
})
export class AdminCreationModule { }
