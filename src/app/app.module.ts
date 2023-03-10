import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { AgmCoreModule } from '@agm/core';
import { StudentsModule } from '../app/Lists/students/students.module'
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { ToastrModule } from 'ngx-toastr';
import { UiSwitchModule } from 'ngx-ui-switch';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TokenInterceptorService } from './token-interceptor.service';




const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};


import * as $ from 'jquery';
import { AddStudentsComponent } from './Lists/add-students/add-students.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { AddSemesterComponent } from './Semester/add-semester/add-semester.component';
import { SemCatlistComponent } from './Category-Semester/sem-catlist/sem-catlist.component';
import { AdminCreationComponent } from './Admin/admin-creation/admin-creation.component';


@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    ContentLayoutComponent,
    AddStudentsComponent,
    AddCategoryComponent,
    AddSemesterComponent,
    SemCatlistComponent,
    AdminCreationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot(),
    UiSwitchModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyDKXKdHQdtqgPVl2HI2RnUa_1bjCxRCQo4'}),
    PerfectScrollbarModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    StudentsModule

    
    
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG ,},
    NgxDatatableModule,
   {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true},
   
  ],
  
  bootstrap: [AppComponent],
  
})
export class AppModule { }
