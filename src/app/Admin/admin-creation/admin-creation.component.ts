import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/shared/service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-creation',
  templateUrl: './admin-creation.component.html',
  styleUrls: ['./admin-creation.component.scss']
})
export class AdminCreationComponent implements OnInit {
  snackbar:any
  AdminsData:any = []
  role:any
  constructor(public http:ServiceService,private modalService: NgbModal,public fb:FormBuilder) {
    this.FETCH_ADMIN_QUIZ()
  }

  ngOnInit(): void {
  }

  openXl(content1) { this.modalService.open(content1, { centered: true,size: 'xl' }); }
  Admin_roles = ['Admin','Teacher','Paper Checker', 'Co-ordinator', 'Re-evaluator']

  SearchRole(event:any)
  {
    if (event.target.value == 0) {
      return
    }
    else
    {
      console.log(event.target.value);
    }
  }
 private FETCH_ADMIN_QUIZ()
 {
   
  var formdata = new FormData;
  
  formdata.append('action',"FETCH_ADMIN_QUIZ");
  this.http.postData(environment.apiURL,formdata).subscribe(res=>
  {
  this.AdminsData = res
  },error=>{
  
  this.snackbar.open("Something went wrong");
  })
  
  }

}
