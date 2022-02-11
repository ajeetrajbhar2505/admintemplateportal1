import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ServiceService } from 'src/app/shared/service.service';
import { environment } from 'src/environments/environment';
declare var require: any;
const data: any = require('../../shared/data/company.json');
import { OnInit , Input , ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss']
})
export class AddStudentsComponent {
  @Input() name;
  temp = [];
  totalStudentCount:any
  ShowStudentcounts:any = [1,2,3,4,5,6]
  stdData = []
  snackbar:any
  pageNo:any = 2
  currentpage:number
  active:any
  categoryWiseData:any = []

  ChangePageNo(pageNo:any)
  {
    
    this.pageNo = pageNo
    this.getStudents()
    this.currentpage = this.pageNo
    console.log('PageNo' , this.pageNo);
    
  }
  // Table Column Titles
  columns = [
      { prop: 'fname', name : 'First Name'},
      { prop: 'lname' , name : 'Last Name'},
      { prop: 'email' , name : 'Email'},
      { prop: 'roll' , name : 'Roll Number'},
    ];
  rows = [];
  
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(public http:ServiceService,private modalService: NgbModal) {
      this.getStudents();
      this.getSemesterWiseQuiz();
  }

  

  previous()
  {
    console.log(this.pageNo);
    
   if (this.pageNo !== 6) {
    this.currentpage = this.pageNo - 1
    this.pageNo = this.currentpage
      this.getStudents()
    console.log('PageNo' , this.pageNo);
    if(this.pageNo < 6){
      return  
    }
    else
    {
      for (let i = 0; i < this.ShowStudentcounts.length; i++) {
        this.ShowStudentcounts = []
         this.ShowStudentcounts.push(this.pageNo - i++)
         this.ShowStudentcounts.push(this.pageNo - i++)
         this.ShowStudentcounts.push(this.pageNo - i++)
         this.ShowStudentcounts.push(this.pageNo - i++)
         this.ShowStudentcounts.push(this.pageNo - i++)
         this.ShowStudentcounts.push(this.pageNo - i++)
      }
    }

   }
   else
   {
     return;
   }
  }

  next()
  {
    console.log(this.pageNo);
      this.currentpage = this.pageNo + 1
      this.pageNo = this.currentpage
        this.getStudents()
      console.log('PageNo' , this.pageNo);
      for (let i = 0; i < this.ShowStudentcounts.length; i++) { 
        this.ShowStudentcounts = []
         this.ShowStudentcounts.push(this.pageNo + i++)
         this.ShowStudentcounts.push(this.pageNo + i++)
         this.ShowStudentcounts.push(this.pageNo + i++)
         this.ShowStudentcounts.push(this.pageNo + i++)
         this.ShowStudentcounts.push(this.pageNo + i++)
         this.ShowStudentcounts.push(this.pageNo + i++)
      }
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
  

this.rows = res['data']
this.temp = res['data']
console.log(this.totalStudentCount);

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

openVerticallyCentered(content1) {
  this.modalService.open(content1, { centered: true });
}

openScrollableContent(longContent) {
  this.modalService.open(longContent, { scrollable: true ,size: 'lg'});
}

getSemesterWiseQuiz()
{
var formdata = new FormData;
formdata.append('action',"SEMESTERWISE_QUIZ");
this.http.postData(environment.apiURL,formdata).subscribe(res=>
{
console.log("semester is "+ JSON.stringify(res));
this.categoryWiseData = res;
//this.categoryWiseData = res;
//console.log("category wise data is "+ JSON.stringify(this.categoryWiseData));
//this.getQuiz();
});
}


}
