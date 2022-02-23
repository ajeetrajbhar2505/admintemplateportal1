import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceService } from 'src/app/shared/service.service';
import { environment } from 'src/environments/environment';
import * as chartsData from '../../shared/data/chartjs';

@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.scss']
})
export class TestReportComponent implements OnInit {
  college:any
  totalexamConducted:any
  snackbar:any
  data1:any = []
  data2:any = []
  data3:any = []
  data4:any = []
  Chartdata1 : any = []
  Labels1:any = []
  Chartdata2 : any = []
  Labels2:any = []
  Chartdata3:any = []
  Labels3:any = []
  LineData1:any = []
  LineLabels1:any = []


  //chart data barcharttype
 barChartOptions:any = chartsData.barChartOptions;
 barChartType:any = chartsData.barChartType;
 barChartLegend:any = chartsData.barChartLegend;
 barChartColors:any = chartsData.barChartColors;
  
  //line data barcharttype
 lineChartOptions = chartsData.lineChartOptions;
 lineChartColors = chartsData.lineChartColors;
 lineChartLegend = chartsData.lineChartLegend;
 lineChartType = chartsData.lineChartType;


 // first chart
  barChartData1: any[] = [
  { barPercentage: .5, data: this.Chartdata1, label: 'EXAM CONDUCTED' }
  ];
 barChartLabels1: string[] = this.Labels1;

 // second chart
 barChartData2: any[] = [
  { barPercentage: .5, data: this.Chartdata2, label: 'EXAM CONDUCTED' }
  ];
 barChartLabels2: string[] = this.Labels2;


  // third chart
  lineChartData1: any[] = [
    { data: this.LineData1, label: 'EXAM CONDUCTED' },
    ];
  lineChartLabels1: string[] = this.LineLabels1;

 // fourth chart
 barChartData3: any[] = [
  { barPercentage: .5, data: this.Chartdata3, label: 'EXAM CONDUCTED' }
  ];
 barChartLabels3: string[] = this.Labels3;

  // events
  public chartClicked(e: any): void {
    //your code here
  }

  public chartHovered(e: any): void {
    //your code here
  }

  
  constructor(public http:ServiceService,private modalService: NgbModal,public fb:FormBuilder) {
    this.TEST_REPORT()
    this.LAST_YR_COUNT()
    this.YRWISE_COUNT()
  }

  ngOnInit(): void {

  }


  SelectCollege(event:any)
  {
    if (event.target.value == 0) {
      return
    }
    else
    {
        this.COLLEGE_ACD_COUNT(event.target.value)
    }
  }


private COLLEGE_ACD_COUNT(id:any)
{
  var formdata = new FormData;
  formdata.append('action',"COLLEGE_ACD_COUNT");
  formdata.append('id',id);
  this.http.postData(environment.REPORTS,formdata).subscribe(res=>
  {
    this.data2 = res
    this.Chartdata2 = []
    this.Labels2 = []
    this.totalexamConducted = 0
    this.data2.forEach((data:any) => {
      this.Chartdata2.push(data.EXAM_COUNT)
      this.Labels2.push(data.academic_year)
      this.college = data.name
      this.totalexamConducted += + data.EXAM_COUNT;
      return this.totalexamConducted;
    });


 // second chart
    this.barChartData2 = [
      { barPercentage: .5, data: this.Chartdata2, label: 'EXAM CONDUCTED' }
      ];
     this.barChartLabels2 = this.Labels2;
    console.log({Chartdata2 : this.Chartdata2});
    console.log({Labels2 : this.Labels2});
  },error=>{
  this.snackbar.open("Something went wrong");
  })
  }







private TEST_REPORT()
{
  var formdata = new FormData;
  formdata.append('action',"COLLEGEWISE");
  this.http.postData(environment.REPORTS,formdata).subscribe(res=>
  {
  this.data1 = res
  this.data1.forEach((data:any) => {
    this.Chartdata1.push(data.ExamCount)
    this.Labels1.push(data.name)
  });
  },error=>{
  this.snackbar.open("Something went wrong");
  })

  }


  private LAST_YR_COUNT()
{
  var formdata = new FormData;
  formdata.append('action',"LAST_YR_COUNT");
  this.http.postData(environment.REPORTS,formdata).subscribe(res=>
  {
  this.data3 = res
  this.data3.forEach((data:any) => {
    this.LineData1.push(data.EXAM_COUNT)
    this.LineLabels1.push(data.MONTH_YEAR)
  });
  },error=>{
  this.snackbar.open("Something went wrong");
  })

  }


  private YRWISE_COUNT()
  {
    var formdata = new FormData;
    formdata.append('action',"YRWISE_COUNT");
    this.http.postData(environment.REPORTS,formdata).subscribe(res=>
    {
    this.data4 = res
    this.data4.forEach((data:any) => {
      this.Chartdata3.push(data.EXAM_COUNT)
      this.Labels3.push(data.YEAR)
    });
    },error=>{
    this.snackbar.open("Something went wrong");
    })
  
    }
  
}
