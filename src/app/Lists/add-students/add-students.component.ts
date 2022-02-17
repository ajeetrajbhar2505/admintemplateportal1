import { Component, } from '@angular/core';
import { ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ServiceService } from 'src/app/shared/service.service';
import { environment } from 'src/environments/environment';
declare var require: any;
const data: any = require('../../shared/data/company.json');
import { OnInit , Input , ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal, NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import * as XLSX from 'xlsx';



@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss']
})
export class AddStudentsComponent implements OnInit {
  form!:FormGroup
  Quiz_info!:FormArray

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
  SelectedQuizName:any = []
  selected_Quiz_id:any
  Quizname:any = []
  UploadBulkPassword:any = []
  AssignBulkStudent:any = []

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

  constructor(public http:ServiceService,private modalService: NgbModal,public fb:FormBuilder) {
    this.getStudents();
    this.getSemesterWiseQuiz();
  }
 async ngOnInit(){
  this.form = this.fb.group({
    fname : new FormControl('',Validators.required),
    lname : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    ID : new FormControl('',Validators.required),
    pass : new FormControl('',Validators.required),
    roll : new FormControl('',Validators.required),
    Quiz_info : new FormArray([])
  })
  }



  Quiz_formgroup(value:any):FormGroup
  {
    return this.fb.group({
      SEMESTERWISE_QUIZ_ID: value,
      quiz_ids : new FormArray([])
    })
  }

  SelectQuiz(value:any)
  {
    console.log(value,'working.....');
    this.Quiz_info = this.form.get('Quiz_info') as FormArray;
    this.Quiz_info.push(this.Quiz_formgroup(value))
    console.log(this.form.value);
  }




  typeSuccess() {
  swal("Good job!", "Student added successfully !!", "success");
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
// console.log("semester is "+ JSON.stringify(res));
this.categoryWiseData = res;
//this.categoryWiseData = res;
//console.log("category wise data is "+ JSON.stringify(this.categoryWiseData));
//this.getQuiz();
});
}


SelectQuizName(event: any, _id: any,ID:any,i:any) {
  if (event.target.checked == true) {
    this.selected_Quiz_id = _id
    console.log({ID : ID});
    this.SelectedQuizName.push(this.selected_Quiz_id)
    console.log(this.SelectedQuizName, '.................after selected array of id ');
   console.log({form : this.form.value});
       
  }
  if (event.target.checked == false) {
   console.log({form : this.form.value});
    var Index = this.SelectedQuizName.indexOf(this.selected_Quiz_id);
    this.SelectedQuizName.splice(Index, 1);
    console.log(this.SelectedQuizName, '.................after dis-selected array of id ');
  }
}
acc: any;
// Prevent panel toggle code
public beforeChange($event: NgbPanelChangeEvent) {
  if ($event.panelId === '2') {
    $event.preventDefault();
  }
  if ($event.panelId === '3' && $event.nextState === false) {
    $event.preventDefault();
  }
};

async UploadBulkPasswords(event:any)
{
  const selectedfile = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsBinaryString(selectedfile);
  fileReader.onload = async (event) => {
    let binarydata = event.target?.result;
    let workbook = XLSX.read(binarydata, { type: 'binary' });
    workbook.SheetNames.forEach(async (sheet: any) => {
      this.UploadBulkPassword = await XLSX.utils.sheet_to_json(
        workbook.Sheets[sheet]
        )
        console.log(this.UploadBulkPassword);
      })
  }
}


async AssignBulkStudents(event:any)
{
  const selectedfile = event.target.files[0];
  const fileReader = new FileReader();
  fileReader.readAsBinaryString(selectedfile);
  fileReader.onload = async (event) => {
    let binarydata = event.target?.result;
    let workbook = XLSX.read(binarydata, { type: 'binary' });
    workbook.SheetNames.forEach(async (sheet: any) => {
      this.AssignBulkStudent = await XLSX.utils.sheet_to_json(
        workbook.Sheets[sheet]
        )
        console.log(this.AssignBulkStudent);
      })
  }
}


}
