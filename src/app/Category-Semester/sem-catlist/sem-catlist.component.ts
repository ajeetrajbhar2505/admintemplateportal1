import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ServiceService } from 'src/app/shared/service.service';
import { ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sem-catlist',
  templateUrl: './sem-catlist.component.html',
  styleUrls: ['./sem-catlist.component.scss']
})
export class SemCatlistComponent implements OnInit {
  form!:FormGroup
  CategoryLists:any = []
  snackbar:any
   constructor(public http:ServiceService,private modalService: NgbModal,public fb:FormBuilder) {
    this.FETCH_SEM_ACADEMIC(),
    this.FETCH_SEMACADEMIC_YEAR(),
    this.FETCH_SEM_CAT()
    this.FETCH_AY()
   }
 
   ngOnInit(){
     this.form = this.fb.group({
       category_name : new FormControl('',Validators.required)
     })
     
   }
 
 
     // Table Column Titles
   rows = [];
   columns = [
 
       { prop: 'category', name : 'Category'},
       { prop: 'semester', name : 'Semester'},
       { prop: 'academic_year', name : 'Year'},
 
     ];
   @ViewChild(DatatableComponent) table: DatatableComponent;
 
   openVerticallyCentered(content1) {
     this.modalService.open(content1, { centered: true,size: 'lg' });
   }
 
   private FETCH_SEM_ACADEMIC()
 
   {
   
   var formdata = new FormData;
   
   formdata.append('action',"FETCH_SEM_ACADEMIC");
   this.http.postData(environment.apiURL,formdata).subscribe(res=>
   
   {
   this.CategoryLists = res['data'];
   this.rows = res['data']
   },error=>{
   
   this.snackbar.open("Something went wrong");
   })
   
   }


   private FETCH_SEMACADEMIC_YEAR()
 
   {
   
   var formdata = new FormData;
   
   formdata.append('action',"FETCH_SEMACADEMIC_YEAR");
   this.http.postData(environment.apiURL,formdata).subscribe(res=>
   
   {
   this.CategoryLists = res['data'];
   this.rows = res['data']
   },error=>{
   
   this.snackbar.open("Something went wrong");
   })
   
   }
 





private FETCH_AY()
 
{

var formdata = new FormData;

formdata.append('action',"FETCH_AY");
this.http.postData(environment.apiURL,formdata).subscribe(res=>

{
this.CategoryLists = res['data'];
this.rows = res['data']
},error=>{

this.snackbar.open("Something went wrong");
})

}

private FETCH_SEM_CAT()
 
{

var formdata = new FormData;

formdata.append('action',"FETCH_SEM_CAT");
this.http.postData(environment.apiURL,formdata).subscribe(res=>

{
this.CategoryLists = res['data'];
this.rows = res['data']
},error=>{

this.snackbar.open("Something went wrong");
})

}

   updateFilter(event) {
     const val = event.target.value.toLowerCase();
 
     // filter our data
     const temp = this.CategoryLists.filter(function (d) {
         return d.category.toLowerCase().indexOf(val) !== -1 || !val;
     });
     // update the rows
     this.rows = temp;
     // Whenever the filter changes, always go back to the first page
     this.table.offset = 0;
 }
  
 Submit()
 {
   let formData = new FormData
   formData.append('name',this.form.get('category_name')?.value);
   console.log({name : formData.get('name')});
 }
 
}
