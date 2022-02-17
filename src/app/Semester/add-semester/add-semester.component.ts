import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ServiceService } from 'src/app/shared/service.service';
import { environment } from 'src/environments/environment';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-semester',
  templateUrl: './add-semester.component.html',
  styleUrls: ['./add-semester.component.scss']
})
export class AddSemesterComponent implements OnInit {
  form!:FormGroup
  SemesterLists:any = []
  snackbar:any
   constructor(public http:ServiceService,private modalService: NgbModal,public fb:FormBuilder) {
     this.GetSemesterlist()
   }
 
   ngOnInit(){
     this.form = this.fb.group({
       semester_name : new FormControl('',Validators.required)
     })
   }
 
 
     // Table Column Titles
   rows = [];
   columns = [
 
       { prop: 'name', name : 'Name'},
 
     ];
   @ViewChild(DatatableComponent) table: DatatableComponent;
 
   openVerticallyCentered(content1) {
     this.modalService.open(content1, { centered: true });
   }
 
   private GetSemesterlist()
 
   {
   
   var formdata = new FormData;
   
   formdata.append('action',"FETCH_SEMACADEMIC_YEAR");
   this.http.postData(environment.apiURL,formdata).subscribe(res=>
   
   {
   this.SemesterLists = res['semester'];
   this.rows = res['semester']
   },error=>{
   
   this.snackbar.open("Something went wrong");
   })
   
   }
 
   updateFilter(event) {
     const val = event.target.value.toLowerCase();
 
     // filter our data
     const temp = this.SemesterLists.filter(function (d) {
         return d.name.toLowerCase().indexOf(val) !== -1 || !val;
     });
     // update the rows
     this.rows = temp;
     // Whenever the filter changes, always go back to the first page
     this.table.offset = 0;
 }
  
 Submit()
 {
   let formData = new FormData
   formData.append('name',this.form.get('semester_name')?.value);
   console.log({name : formData.get('name')});
 }
 
}
