// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Change below domain name to upload the code on different domain
export const DOMAIN = 
{
  //domainname :"https://jbims.offee.in/"

//  domainname :"https://aurouniversity.offee.in/"
    // domainname : "https://apptesting-offee.online/"
    domainname : "https://testing.offee.online/"
    // domainname :"https://testing.offee.online/"
    // domainname:"https://gil.offee.in/" 
    //  domainname :"https://staging.offee.in/"
  // domainname:"https://knowmat.offee.online/"

  // domainname : "https://knowmat.offee.online/"
    //  domainname: "https://ibt.offee.online/"
// domainname:"http://45.120.136.104/"
  // domainname:"https://proctor.offee.in/"
}

export const URLS  = 
{
  mainDomain :DOMAIN.domainname,
  apiurl : DOMAIN.domainname+ "services/interfaces/controller.php",
  loginurl : DOMAIN.domainname+ "services/interfaces/AdminLoginController.php",
  baseurl : DOMAIN.domainname + "services/",
  AddControllerUrl: DOMAIN.domainname + "services/interfaces/AddController.php",
  ResetControllerUrl:DOMAIN.domainname + "services/interfaces/ResetController.php",
  upload_student_url: DOMAIN.domainname + "services/interfaces/upload_students.php",
  UpdateControllerUrl: DOMAIN.domainname + "services/interfaces/UpdateController.php",
  ExportCSVQUIZWISE : DOMAIN.domainname + "services/interfaces/export_results.php",
  ExportPDFQUIZWISE : DOMAIN.domainname + "services/interfaces/export_pdf.php",
  ExportZIP : DOMAIN.domainname + "services/interfaces/ZipCreation.php",
  upload_quiz_url:DOMAIN.domainname+"services/interfaces/upload_quiz.php",
  EXPORTPAPER_PDF:DOMAIN.domainname+"services/interfaces/export_question_paper.php",
  SEND_MAIL_BULK_USER : DOMAIN.domainname+"services/interfaces/send_user_mail.php",
  EXPORTZIPPAPERS:DOMAIN.domainname+"services/interfaces/ZipPapers.php",
  TODAYSALLRESULTZIP:DOMAIN.domainname+"services/interfaces/todaysResult.php",
  ExportProctorPDF:DOMAIN.domainname+"services/interfaces/export_proctor_pdf.php",
  EXPORTQANALYSIS_EXCEL:DOMAIN.domainname+"services/interfaces/export_questionwise.php",
  ExportCSVQUIZWISEREEVAL : DOMAIN.domainname + "services/interfaces/export_results_reeval.php",
  reset_student_url: DOMAIN.domainname + "services/interfaces/reset_students_password.php",
  EXPORTPAPER_EXCEL:DOMAIN.domainname+"services/interfaces/export_question_paper_excel.php",
  EXPORTZIPPAPERS_EXCEL:DOMAIN.domainname+"services/interfaces/export_question_paper_zips.php",
  CLO_REPORT: DOMAIN.domainname+"services/interfaces/bloomscontroller.php",
  ADMIN_USER_QUESTION_ANSWER_UPLOAD: DOMAIN.domainname+"services/interfaces/AdminImageUpload.php",
  DASHBOARD_STATS : DOMAIN.domainname+"services/interfaces/getStats.php",
  REPORTS : DOMAIN.domainname+"services/interfaces/ReportsController.php"

  // SYNC_DEVICE_URL : DOMAIN.domainname+"services/interfaces/command.php"

}




export const environment = 
{
  production: false,
  mainDomain :URLS.mainDomain,
  apiURL : URLS.apiurl,
  loginURL : URLS.loginurl,

  baseURL : URLS.baseurl,
  addURL : URLS.AddControllerUrl,
  resetURL : URLS.ResetControllerUrl,
  studentsURL:URLS.upload_student_url,
  quizUploadURL:URLS.upload_quiz_url,

  updateURL : URLS.UpdateControllerUrl,
  ExportCSVURL :URLS.ExportCSVQUIZWISE,
  ExportPDFURL : URLS.ExportPDFQUIZWISE,
  ZipURL : URLS.ExportZIP,
  version:1,
  ExportPaperPDFURL : URLS.EXPORTPAPER_PDF,
  SendBulkMailURL : URLS.SEND_MAIL_BULK_USER,
  PAPERSZIP :URLS.EXPORTZIPPAPERS,
  TODAYSZIP:URLS.TODAYSALLRESULTZIP,
  PROCTORPDF:URLS.ExportProctorPDF,
  EXPORTQANALYSIS: URLS.EXPORTQANALYSIS_EXCEL,
  ExportCSVREEVALURL :URLS.ExportCSVQUIZWISEREEVAL,
  resetstudentsPasswordURL:URLS.reset_student_url,
  SOCKET_ENDPOINT : "https://chat-test.offee.in",
  ExportPaperExcelURL : URLS.EXPORTPAPER_EXCEL,
  CATEGORY_PAPERSZIP :URLS.EXPORTZIPPAPERS_EXCEL,
  CLO_REPORTS : URLS.CLO_REPORT,
  isDevice:true,
  ADMIN_USER_QUESTION_ANSWER_UPLOAD:URLS.ADMIN_USER_QUESTION_ANSWER_UPLOAD,
  COLLEGE_STATS : URLS.DASHBOARD_STATS,
  REPORTS : URLS.REPORTS

  //  SYNCDEVICE_URl : URLS.SYNC_DEVICE_URL


};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
