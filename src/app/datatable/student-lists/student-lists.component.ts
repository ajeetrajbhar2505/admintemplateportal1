import { Component, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ServiceService } from 'src/app/shared/service.service';
import { environment } from 'src/environments/environment';
declare var require: any;
const data: any = require('../../shared/data/company.json');

@Component({
  selector: 'app-student-lists',
  templateUrl: './student-lists.component.html',
  styleUrls: ['./student-lists.component.scss']
})
export class StudentListsComponent  {

  rows = [];
  temp = [];
  totalStudentCount:any
  ShowStudentcounts:any
  stdData = []
  snackbar:any
  pageNo:any = 2

 

  ChangePageNo(pageNo:any)
  {
    this.pageNo = pageNo
    this.getStudents()
  }
  // Table Column Titles
  columns = [
      { prop: 'fname' },
      { name: 'lname' },
      { name: 'email' },
      { name: 'roll' },
    ];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(public http:ServiceService) {
      this.getStudents()
  }

  updateFilter(event) {
      const val = event.target.value.toLowerCase();

      // filter our data
      const temp = this.temp.filter(function (d) {
          return d.fname.toLowerCase().indexOf(val) !== -1 || !val;
      });

      // update the rows
      this.rows = temp;
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
  }



  private getStudents()

{

var formdata = new FormData;

formdata.append('action',"STUDENT_NEW");

formdata.append('pageNo',this.pageNo.toString());

this.http.postData(environment.apiURL,formdata).subscribe(res=>

{

this.totalStudentCount = res['count'];
this.ShowStudentcounts = this.totalStudentCount / 20
console.log({ ShowStudentcounts : this.ShowStudentcounts});

this.rows = res['data']
this.temp = res['data']
console.log(this.totalStudentCount,'..........');

for(var i = 0 ;i<res['data'].length ; i++)

{

this.stdData = this.stdData.concat(res['data'][i]);
// console.log(this.stdData);


}

// this.stdData = this.stdData.concat(res['data']);

},error=>{

this.snackbar.open("Something went wrong");

})

}
}
