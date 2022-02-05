import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebService 
{
  socket;
  setupSocketConnection() 
  {
//     this.socket = io(environment.SOCKET_ENDPOINT);
 

//   this.socket.on('connect', ()=>
//   {
//     console.log('Connected to Server')
  
//   });
//   this.socket.on('chat', (message)=>
// {
//     console.log(message);
// });

// const config: SocketIoConfig = { url: environment.SOCKET_ENDPOINT, options: {} };



  }

  constructor(private http:HttpClient) 
  {
    console.log("In service refresh");
    this.setAdminDetails();
    //this.getAdminRole();
    
  }

  getAdminRole()
  {
    var formdata = new FormData;
    formdata.append('action',"ADMIN_ROLE");
  return this.postData(environment.apiURL,formdata)
  //  .subscribe(res=>
    // {
    //   let role = res['role'];
    //   localStorage.setItem('adminRole',role);
    //   this.adminRole = role;
    //   this.adminRole = localStorage.getItem("adminRole");

    //   console.log(this.adminRole);

    // });
  }
  setAdminDetails()
  {
    this.username = localStorage.getItem("username");
    this.adminId = localStorage.getItem("admin_id");
    this.adminStatus = localStorage.getItem("adminStatus");
    this.adminRole = localStorage.getItem("adminRole");
    this.college_id = localStorage.getItem("college_id");
    this.college_name = localStorage.getItem("college_name");
  }

  private mediData: any=new BehaviorSubject<any[]>([]);
  
  analysisReceived = this.mediData.asObservable();
 public resetPassword = "Reset Password";
 public  adminId:string;
 public  adminRole :string;
  adminStatus :string;
  username :string;
  college_name:string;
  public college_id:string;
  public dateSearched:string="";
  public isDevice = environment.isDevice;


  
  public postData(url,data:FormData)
  {
    data.append('role',this.adminRole);
    data.append('admin_id',this.adminId);
    data.append('college_id',this.college_id);

    //let dummyData = new FormData;
    //dummyData.append("data",JSON.stringify(data));
    //data.append('data')


  //   let httpheaders  = new HttpHeaders({
  //     'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  // }, );
  //let httpheaders = new HttpHeaders();
  //httpheaders =  httpheaders.set('Authorization','Bearer '+'hi');
   // httpheaders = httpheaders.set('HEADERDATEA','1');
    
    //  httpheaders = httpheaders.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    // // httpheaders = httpheaders.set('Access-Control-Allow-Headers', 'Content-Type, Content-Range, Content-Disposition, Content-Description');
    // // httpheaders = httpheaders.set('Content-Disposition', 'form-data');
    //  httpheaders = httpheaders.append('Content-Type', 'multipart/form-data;boundary=----WebKitFormBoundaryffefrefreferfeferfer');
    //httpheaders = httpheaders.set('Content-Type','application/x-www-form-urlencoded');


    // httpheaders =  httpheaders.set('Content-Type', 'text/html; charset=UTF-8');    
    //httpheaders = httpheaders.set('Accept-Encoding','gzip');
    
    //var headers = new HttpHeaders().set('Authorization','Bearer '+"Hi");
    
    //let parsedData = JSON.stringify(data);


    console.log(data);
    // let options = ne
    return this.http.post(url,data);
  }

  public  sendAIReport(url,data)
  {
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };
    // 'https://api.offee.online/exams/sendProctorData',formdata
    return this.http.post(url,data,options);
  }

  categoryColumns = {
    columns:
    [
    //  { name : "vw_user", header : "Users"},
      { name : "name", header : "Name",type:"T"},
      { name : "visibility", header : "Visibility",type:"T"},
      // { name : "Result", header : "",type:"B"},
      // { name : "DownloadZip", header : "",type:"B"},
      // { name : "Delete", header : "",type:"B"},
    ]
  }
  semesterColumns = {
    columns:
    [
    //  { name : "vw_user", header : "Users"},
      { name : "name", header : "Name",type:"T"},
      // { name : "visibility", header : "Visibility",type:"T"},
      // { name : "Result", header : "",type:"B"},
      // { name : "DownloadZip", header : "",type:"B"},
      // { name : "Delete", header : "",type:"B"},
    ]
  }

  // !For Fetching students columns
  studentsColumns = 
  {
    columns :
    [
      {name:"fname",header:"First Name",type:"T"},
      {name:"lname",header:"Last Name",type:"T"},
      {name:"email",header:"Email",type:"T"},
      {name:"roll",header:"Roll #",type:"T"},
      {name:"other_detail1",header:"OtherDetails",type:"T"},

      {name:"Attempted",header:"Exams Done",type:"T"},
      // {name:"name",header:"Category",type:"T"},
      {name:"STUDENT_SEM_YR",header:"Student Academic Years",type:"T"},
      {name:this.resetPassword,header:"",type:"B"},
      // {name:"Delete",header:"",type:"B"},
    ]
  }
  reportColumns = 
  {
    columns :
    [
      {name:"quiz_name",header : "Quiz ",type:"T"},
      {name:"quiz_answered",header:"Quiz Answered",type:"T"},
      {name:"MAX",header:"Highest Mark",type:"T"},
      {name:"Average",header:"Average",type:"T"},
    ]
  }

  questionReportColumns = 
  {
    columns  :
    [
      {name:"text",header:"Question",type:"T"},
      {name:"Attempted",header:"Students Attempted",type:"T"},
      {name:"Stats",header:"Operation",type:"B"},

      // {name:"SKIPPED",header:"Students Skipped",type:"T"},
      // {name:"Correct",header:"Students Answered Correct",type:"T"},
      // {name:"InCorrect",header:"Students Answered Incorrect",type:"T"},
      
    ]
  }

  ongoingExamColumns =
  {
    columns : [
      {
        name:"roll",header :"Roll",type:"T"
      },
      {
        name:"fname",header:"Name",type:"T"
      },
      {
        name:"start_time",header:"start_time",type:"T"
      },
      {
        name:"hasLostFocus",header:"Minimize",type:"T"
      }

    ]
  } 

  categoryWisePaper = 
  {
    columns:[
      {
        name:"quiz_name",header:"Paper",type:"T"
      },
      {
        name:"quiz_date",header:"Date",type:"T"
      },
      {
        name:"ANSWERED",header:"Students Answered",type:"T"
      }
    ]
  }

  studentAnsweredColumns =
  {
    columns : [
      {
        name:"roll",header :"Roll",type:"T"
      },
      {
        name:"fname",header:"Name",type:"T"
      }
      // },
      // {
      //   name:"TIMESPENT",header:"End Time",type:"T"
      // }
    ]
  } 
  studentAssignedColumns =
  {
    columns : [
      {
        name:"roll",header :"Roll",type:"T"
      },
      {
        name:"fname",header:"Name",type:"T"
      },
      {
        name:"RemoveStudent",header:"Remove",type:"B"
      }
    ]
  } 
  studentNJColumns =
  {
    columns : [
      {
        name:"roll",header :"Roll",type:"T"
      },
      {
        name:"fname",header:"Name",type:"T"
      },
      {
        name:"other_detail1",header:"Other Details",type:"T"
      }
    ]
  } 
  studentActivityColumns =
  {
    columns : [
      {
        name:"roll",header :"Roll",type:"T"
      },
      {
        name:"fname",header:"Name",type:"T"
      },
      
      {
        name:"quiz_name",header:"Quiz",type:"T"
      },
      {
        name:"hasLostFocus",header:"Minimized",type:"T"
      },
    ]
  } 
  studentLoggedInColumns =
  {
    columns : [
      {
        name:"roll",header :"Roll",type:"T"
      },
      {
        name:"fname",header:"Name",type:"T"
      },
      {
        name:"image",header:"Image",type:"T"
      },
      {
        name:"LAST_LOGIN",header:"Last Login",type:"T"
      },
      {
        name:"LogOut",header:"Operation",type:"B"
      }
    ]
  } 
  quizResultReevaluationColumns = 
  {
    columns : [
      {
        name:"roll",header :"Roll",type:"T"
      },
      {
        name:"fname",header:"Name",type:"T"
      },
      {
        name:"RESULT",header:"Result",type:"T"
      },
      {
        name:"reevaluate_result",header:"Reevaluation Result",type:"T"
      },
      {
        name:"reevaluation_status",header:"Reevaluation Status",type:"T"
      },

      {
        name:"correct",header:"Pending Question For Checking",type:"T"
      }
      // {
      //   name:"RANK",header:"Rank",type:"T"
      // },
      // {
      //   name:"PERCENTAGE",header:"Percentage",type:"T"
      // },
      // {
      //   name:"TIMESPENT",header:"Time Spent",type:"T"
      // },

    ]
  }
  quizResultColumns = 
  {
    columns : [
      {
        name:"roll",header :"Roll",type:"T"
      },
      {
        name:"fname",header:"Name",type:"T"
      },
      {
        name:"RESULT",header:"Result",type:"T"
      },
      {
        name:"correct",header:"Correct(On mcq basis)",type:"T"
      },
      {
        name:"Incorrect",header:"Incorrect(On mcq basis)",type:"T"
      },
      {
        name:"skipped",header:"Skipped(On mcq basis)",type:"T"
      },
      {
        name:"download",header:"Download PDF",type:"B"
      },
      {
        name:"papercheck_status",header:"Paper Checked(On Subjective Basis)",type:"T"
      }
      // {
      //   name:"RANK",header:"Rank",type:"T"
      // },
      // {
      //   name:"PERCENTAGE",header:"Percentage",type:"T"
      // },
      // {
      //   name:"TIMESPENT",header:"Time Spent",type:"T"
      // },

    ]
  }
  semesterCategoryYearColumns =
  {
    columns:[
      {
        name:"category",header:"Category",type:"T"
      },
      {
        name:"semester",header:"Semester",type:"T"
      },
      {
        name:"academic_year",header:"Year",type:"T"
      },
      {
        name:"Results",header:"Results",type:"B"
      },
      {
        name:"Download Zip",header:"Download All Result",type:"B"
      },
      {
        name:"DownloadPapers",header:"Download Q Paper",type:"B"
      },
      {
        name:'TOTAL_PAPER',header:"Papers",type:"T"
      }
    ]
  }

  studentReportColumn = {
   columns: [
    {
      name:"quiz_name",header:"Paper",type:"T"
    },
    {
      name:"quiz_date",header:"Paper Date",type:"T"
    },
    {
      name:"result",header:"Marks Scored",type:"T"
    },
    {
      name:"Comparison",header:"Comparison",type:"B"
    },
    ]
  }
  examAdminColumns =
  {
    columns : [
      {
        name:"username",header :"User Name",type:"T"
      },
      {
        name:"email_id",header:"Email Id",type:"T"
      },
      {
        name:"role",header:"Role",type:"T"
      }
    ]
  } 

  stdLoginColumns =
  {
    columns : [
      {
        name:"last_login",header :"Login Time",type:"T"
      },
      {
        name:"email_id",header:"Email Id",type:"T"
      },
      {
        name:"role",header:"Role",type:"T"
      }
    ]
  } 
  setAnalytics(data:any[])
  {
    this.mediData.next(data);
  }

  authenticateAdmin(formdata)
  {
    return this.http.post(environment.loginURL,formdata);
  }


}
