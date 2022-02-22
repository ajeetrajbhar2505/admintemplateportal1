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
  
  page = 4;
  form!:FormGroup
  new_academic_year!:FormGroup
  CategoryLists:any = []
  academic_year:any = []
  semesterLists:any = []
  snackbar:any
  filterdata:any = []
  repeat_cat_year:any = 'N'
  create_as_current_Year:any = 'N'
  Years:any = []
  SelectedYearId:any
  PAPER_CATEGORYWISE_DATA:any = []
   constructor(public http:ServiceService,private modalService: NgbModal,public fb:FormBuilder) {
   this.FETCH_SEM_ACADEMIC()
   this.FETCH_SEMACADEMIC_YEAR()

   }
 
   ngOnInit(){
     this.form = this.fb.group({
      category : new FormControl('',Validators.required),
      semester : new FormControl('',Validators.required),
      year : new FormControl('',Validators.required),
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
   openXl(content1) { this.modalService.open(content1, {size: 'xl'}); }

   create_new_semester()
   {
      this.FETCH_AY()
      this.FETCH_SEM_CAT()
   }


   private FETCH_SEM_ACADEMIC()
 
   {
   
   var formdata = new FormData;
   
   formdata.append('action',"FETCH_SEM_ACADEMIC");
   this.http.postData(environment.apiURL,formdata).subscribe(res=>
   
   {
   this.rows = res['data']
  this.filterdata = res['data']
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
     this.Years = res['academic_year']
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
this.academic_year = res['data'];
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
this.CategoryLists = res['category'];
this.semesterLists = res['semester']
},error=>{

this.snackbar.open("Something went wrong");
})

}

   updateFilter(event:any) {
     const val = event.target.value.toLowerCase();
    console.log(val);
     // filter our data
     const temp = this.filterdata.filter(function (d:any) {
         return d.category.toLowerCase().indexOf(val) !== -1 || !val;
     });
     // update the rows
     this.rows = temp;
     console.log(temp);
     
     // Whenever the filter changes, always go back to the first page
     this.table.offset = 0;
 }

  
 Submit()
 {

    console.log({form : this.form.value});
    
 }

 Selecteddata(event:any)
 {
   if (event.target.value == 0) {
     return;
   }
   else
   {
   console.log(event.target.value);
   }
 }

 create_new_academic_year()
 {
    this.new_academic_year = this.fb.group({
    academic_year : new FormControl('',Validators.required),
    })
 }

 Repeat_Cat_Year(event:any)
 {
   if (event.target.checked == true) 
   {
      this.repeat_cat_year = 'Y'

   }
   else if(event.target.checked == false)
   {
    this.repeat_cat_year = 'N'
   }
   else
   {
     return;
   }
 }

 Create_AS_Current_Year(event:any)
 {
  if (event.target.checked == true) 
  {
    this.create_as_current_Year = 'Y'
  }
  else if(event.target.checked == false)
  {
    this.create_as_current_Year = 'N'
  }
  else
  {
    return;
  }
 }

 SubmitYear()
 {
    let data = 
    {
      academic_year : this.new_academic_year.get('academic_year').value,
      repeat_cat_year : this.repeat_cat_year,
      create_as_current_Year : this.create_as_current_Year
    }
    console.log({data: data});
    
 }

 SearchByYear(event:any)
 {
  if (event.target.value == 0) {
    return;
  }
  else
  {
    this.YEARWISE_CAT()
  }
 }

 private YEARWISE_CAT()
 {

  var formdata = new FormData;
  
  formdata.append('action',"YEARWISE_CAT");
  formdata.append('yearId',this.SelectedYearId)
  this.http.postData(environment.apiURL,formdata).subscribe(res=>
  {
  this.rows = res['data'];
  this.filterdata = res['data']
  },error=>{
  
  this.snackbar.open("Something went wrong");
  })
  
  }


  View_Paper_Details(id:any)
  {
    this.PAPER_CATEGORYWISE(id)
  }

  private PAPER_CATEGORYWISE(id:any)
  {
   var formdata = new FormData;
   formdata.append('action',"PAPER_CATEGORYWISE");
   formdata.append('category_semester',id)
   this.http.postData(environment.apiURL,formdata).subscribe(res=>
   {
   this.PAPER_CATEGORYWISE_DATA = res['data'];
   },error=>{
   
   this.snackbar.open("Something went wrong");
   })
   
   }
 
}
