import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ServiceService } from './shared/service.service';



@Injectable({

providedIn: 'root'

})

export class TokenInterceptorService implements HttpInterceptor

{

constructor(private http:ServiceService,private router:Router)

{



}

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>

{

let newHeaders = req.headers;

let token = localStorage.getItem('token');

//All the below lines are working and are just removed for proctor....

const authRequest = req.clone({

setHeaders:{

Authorization:'Bearer '+token,

},

});



return next.handle(authRequest).pipe(

catchError((error: HttpErrorResponse) => {

{

console.log(error.message);

let errorMsg = "";

if(error.status== 401 || error.status == 403)

{

this.http.username = "";

console.log("In error :"+error);

localStorage.clear();

this.router.navigate(['']);

}

return throwError(errorMsg);

}}))

////Uptill here all the things are working and are just commented for proctor

// return next.handle(authRequest);

}

}