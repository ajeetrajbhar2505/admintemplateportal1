import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/shared/service.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quiz-lists',
  templateUrl: './quiz-lists.component.html',
  styleUrls: ['./quiz-lists.component.scss']
})
export class QuizListsComponent implements OnInit {
  snackbar:any
  QUIZ_DATES_ARRAY:any = []
  QUIZS:any = []
  STUDENT_NOTJOINED_ARRAY:any = []
  EXAM_ADMINS_ARRAY:any = []
  STUDENT_ANSWERED_ARRAY:any = []
  ONGOING_EXAM_ARRAY:any = []
  quiz_name:any
     constructor(public http:ServiceService,private modalService: NgbModal) {
    this.QUIZ_DATES()
    this.ALL()
  }

  ngOnInit() {
  }
  
  openVerticallyCentered(longContent) {
    this.modalService.open(longContent, {size: 'xl'});
  }

private  QUIZ_DATES()
  {   
   
   var formdata = new FormData;
   
   formdata.append('action',"QUIZ_DATES");
   this.http.postData(environment.apiURL,formdata).subscribe(res=>
   
   {
   this.QUIZ_DATES_ARRAY = res['data'];
   },error=>{
   
   this.snackbar.open("Something went wrong");
   })
   
  }

  private  ALL()
  {   
   
   var formdata = new FormData;
   
   formdata.append('operation',"ALL");
   formdata.append('action',"QUIZ");
   formdata.append('pageNo',"1");
   formdata.append('date_search',"");
   this.http.postData(environment.apiURL,formdata).subscribe(res=>
   
   {
   this.QUIZS = res['data'];
   },error=>{
   
   this.snackbar.open("Something went wrong");
   })
   
  }

   GetALLPAPER_DATEWISE(event:any)
   {    
         let date:any = event.target.value
         if (date == 0) {
           return
         }
         else
         {
          this.ALLPAPER_DATEWISE(date)
         }
   }

  private  ALLPAPER_DATEWISE(date:any)
  {   
   
   var formdata = new FormData;
   
   formdata.append('operation',"ALL");
   formdata.append('action',"QUIZ");
   formdata.append('pageNo',"9");
   formdata.append('quiz_date',date);
   this.http.postData(environment.apiURL,formdata).subscribe(res=>
   
   {
   this.QUIZS = res['data'];
   },error=>{
   
   this.snackbar.open("Something went wrong");
   })
   
  }


  GetSTUDENT_NOTJOINED(id:any)
  {
    this.STUDENT_NOTJOINED(id)
  }

  GetEXAM_ADMIN(id:any)
  {
     this.EXAM_ADMIN(id)
  }

  private  EXAM_ADMIN(id:any)
  {   
   
   var formdata = new FormData;
   
   formdata.append('action',"EXAM_ADMIN");
   formdata.append('exam_id',id);
   this.http.postData(environment.apiURL,formdata).subscribe(res=>
   
   {
   this.EXAM_ADMINS_ARRAY = res['data'];
   },error=>{
   
   this.snackbar.open("Something went wrong");
   })
   
  }

  private  STUDENT_NOTJOINED(id:any)
  {   
   
   var formdata = new FormData;
   
   formdata.append('action',"STUDENT_NOTJOINED");
   formdata.append('f_id',id);
   this.http.postData(environment.apiURL,formdata).subscribe(res=>
   
   {
   this.STUDENT_NOTJOINED_ARRAY = res['data'];
   },error=>{
   
   this.snackbar.open("Something went wrong");
   })
   
  }

  GetSTUDENT_ANSWERED(id:any)
  {
     this.STUDENT_ANSWERED(id)
  }

  private STUDENT_ANSWERED(id:any)
  {
    var formdata = new FormData;
   
   formdata.append('action',"STUDENT_ANSWERED");
   formdata.append('formID',id);
   this.http.postData(environment.apiURL,formdata).subscribe(res=>
   
   {
   this.STUDENT_ANSWERED_ARRAY = res['data'];
   },error=>{
   
   this.snackbar.open("Something went wrong");
   })
  }

  GetONGOING_EXAM(data:any)
  {
         this.ONGOING_EXAM(data.id)
         this.quiz_name = data.quiz_name
  }

  private ONGOING_EXAM(id:any)
  {
    var formdata = new FormData;
   
   formdata.append('action',"ONGOING_EXAM");
   formdata.append('f_id',id);
   this.http.postData(environment.apiURL,formdata).subscribe(res=>
   
   {
   this.ONGOING_EXAM_ARRAY = res['data'];
   },error=>{
   
   this.snackbar.open("Something went wrong");
   })
  }

}
