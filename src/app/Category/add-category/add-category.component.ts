import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ServiceService } from 'src/app/shared/service.service';
import { ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent  {
  form!:FormGroup
 CategoryLists:any = []
 snackbar:any
  constructor(public http:ServiceService,private modalService: NgbModal,public fb:FormBuilder) {
    this.GetCategorylist()
  }

  ngOnInit(){
    this.form = this.fb.group({
      category_name : new FormControl('',Validators.required)
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

  private GetCategorylist()

  {
  
  var formdata = new FormData;
  
  formdata.append('action',"CATEGORY");
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
  formData.append('name',this.form.get('category_name')?.value);
  console.log({name : formData.get('name')});
}

}
