import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryRoutingModule } from './add-category-routing.module';
import { AddCategoryComponent } from './add-category.component'

@NgModule({
  declarations: [
    // AddCategoryComponent
  ],
  imports: [
    CommonModule,
    AddCategoryRoutingModule,
    NgxDatatableModule,
    NgbModule
  ]
})
export class AddCategoryModule { }
