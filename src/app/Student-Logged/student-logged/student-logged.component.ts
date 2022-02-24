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
  snackbar:any
  constructor(public http:ServiceService,private modalService: NgbModal) {
    this.STUDENT_LOGGEDIN()
  }

  ngOnInit(): void {
  }


  updateFilter(event:any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.rows.filter(function (d) {
        return d.roll.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
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

  rows = [];
  columns = [

      { prop: 'fname', name : 'Name'},
      { prop: 'roll', name : 'ROLL'},
      { prop: 'LAST_LOGIN', name : 'LAST LOGIN'},

    ];

  @ViewChild(DatatableComponent) table: DatatableComponent;
  onSelect(data:any)
  {
   console.log(data);
   
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

}
