import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ServiceService } from 'src/app/shared/service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-student-logged',
  templateUrl: './student-logged.component.html',
  styleUrls: ['./student-logged.component.scss']
})
export class StudentLoggedComponent implements OnInit {
  STUDENTLOGGED:any = []

  Userdata:any = []
  snackbar:any
  constructor(public http:ServiceService,private modalService: NgbModal) {
    this.STUDENT_LOGGEDIN()
  }

  ngOnInit(): void {
  }


  updateFilter(event:any) {
    const val = event.target.value.toLowerCase();
     console.log(val);
     
}



  rows = [];
  columns = [

      { prop: 'fname', name : 'Name'},
      { prop: 'roll', name : 'ROLL'},
      { prop: 'LAST_LOGIN', name : 'LAST LOGIN'},

    ];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  openXl(content1:any) { this.modalService.open(content1, { scrollable: true}); 
  }

  onSelect(data:any)
  {
   console.log(data);
   this.STUDLOGDETAILS(data.id)
  }



private STUDENT_LOGGEDIN()
{
  var formdata = new FormData;
  formdata.append('action',"STUDENT_LOGGEDIN");
  this.http.postData(environment.apiURL,formdata).subscribe(res=>
  {
     this.rows = res['data']
  },error=>{
  this.snackbar.open("Something went wrong");
  })

  }

private STUDLOGDETAILS(student_id:any)
{
  var formdata = new FormData;
  formdata.append('action',"STUDLOGDETAILS");
  formdata.append('student_id',student_id);
  formdata.append('from','ID');
  this.http.postData(environment.apiURL,formdata).subscribe(res=>
  {
     this.Userdata = res['data']
     console.log({Userdata : this.Userdata});
     
  },error=>{
    alert(error)
  })

  }

private SEARCH_LOGGED_IN(user_roll:any)
{
  var formdata = new FormData;
  formdata.append('action',"SEARCH_LOGGED_IN");
  formdata.append('user_roll',user_roll);
  this.http.postData(environment.apiURL,formdata).subscribe(res=>
  {
     this.STUDENTLOGGED = res['data']
  },error=>{
  this.snackbar.open("Something went wrong");
  })

  }

}
