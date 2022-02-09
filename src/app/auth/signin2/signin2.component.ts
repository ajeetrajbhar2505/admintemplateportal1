import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ServiceService } from "src/app/shared/service.service"

@Component({
  selector: 'app-signin2',
  templateUrl: './signin2.component.html',
  styleUrls: ['./signin2.component.css']
})
export class Signin2Component implements OnInit {
  username:any
  password:any
  college_code:any
  validUser:any
  invalid:any
  snackbar:any
  validating:any
  message:any
  @ViewChild('f') signin2: NgForm;

  
  constructor(private router: Router,
              private route: ActivatedRoute,public http:ServiceService) { }

              ngOnInit() {
              }
            

  //  On submit click, reset field value
 async  onSubmit() {
var formdata =new FormData;
formdata.append('action',"AUTHENTICATE_ADMIN");
formdata.append('username',this.username);
formdata.append('password',this.password);
formdata.append('college_code',this.college_code);
console.log(formdata);

let response:any = await this.http.authenticateAdmin(formdata).toPromise()
console.log(response);

if(response.status == 200)

{

this.validUser = true;

this.invalid = false;



this.snackbar.open("OTP has been sent on your registered emailid");

// this.college_id = response['college_id'];

this.http.college_name = response['college_name'];

this.http.college_id = response['college_id'];

}

else if(response.status == 201)

{

this.invalid = false;

this.http.college_name = response['college_name']


this.http.college_id = response['college_id'];

this.saveDataAndProcees(response);

}

else

{

this.validating = false;

console.log("Invalid");

this.invalid = true;

// console.log("Invalid" + this.invalid);

this.message = response['message'];

// this.message = response['message'];

}
  }

  
  
    


  // On Signup link click
  onSignup2() {
    this.router.navigate(['dashboard/ecommerce-v1'], { relativeTo: this.route.parent });
  }




  public saveDataAndProcees(res)

  {
  
  this.http.username = this.username;
  
  this.http.adminId = res['admin_id'];
  
  this.http.adminRole = res['role'];
  
  this.http.college_id = res['college_id'];
  
  //this.http.college_name = res['college_name'];
  
  localStorage.setItem('lastLogin',new Date().toString());
  
  localStorage.setItem('username',this.http.username);
  
  localStorage.setItem('admin_id',this.http.adminId);
  
  localStorage.setItem('adminRole',this.http.adminRole.toString());
  
  localStorage.setItem('college_id',res['college_id']);
  
  localStorage.setItem('college_name',this.http.college_name);
  
  localStorage.setItem('token',res['token']);
  
  // localStorage.setItem('adminStatus',this.http.adminStatus.toString());
  
  this.validating = false;
  
  if(this.http.adminRole == "4")
  
  {
  
  this.router.navigate(['live-exam']);
  
  }
  
  else{
  
  this.router.navigate(['dashboard/ecommerce-v1']);
  
  }
  
  }

}
