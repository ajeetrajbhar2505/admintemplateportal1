import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestReportRoutingModule } from './test-report-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts'
import { TestReportComponent } from './test-report.component'

@NgModule({
  declarations: [
    TestReportComponent,
    
  ],
  imports: [
    CommonModule,
    TestReportRoutingModule,
    NgxDatatableModule,
    NgbModule,
    ChartsModule
  ]
})
export class TestReportModule { }
