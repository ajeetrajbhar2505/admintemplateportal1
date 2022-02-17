import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SemCatlistRoutingModule } from './sem-catlist-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SemCatlistRoutingModule,
    NgxDatatableModule,
    NgbModule
  ]
})
export class SemCatlistModule { }
