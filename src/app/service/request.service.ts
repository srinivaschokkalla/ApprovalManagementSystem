import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Budget } from '../Models/Budget.model';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl = 'http://localhost:3000/BudgetReport';

  constructor(private http: HttpClient) { }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error', errorResponse.error);
    }
    else {
      console.log('Server Side error', errorResponse.error);
    }

    return throwError('their is error in code');
  }

  public getAllRequest():Observable<Budget[]> {
    debugger;
    return this.http.get<Budget[]>(this.baseurl); 
  }
  public getbudgetById(id:number):Observable<Budget>{
    const url=`${this.baseurl}/${id}`;
    return this.http.get<Budget>(url);
  }
  // public updateUser(user: any): Observable<Budget> {
  //   const url = `${this.baseurl}/${user.id}`;
  //   return this.http.put<Budget>(url, user).pipe(map(() => user)
  //   );

  // }
  public savedata(request: any): Observable<Budget> {
    return this.http.post<Budget>(this.baseurl, request).pipe(catchError(this.handleError));
  }

  public deletedata(id:any): Observable<Budget> {
    const url = `${this.baseurl}/${id}`;
    return this.http.delete<Budget>(url).pipe(catchError(this.handleError));
  }
  public editdata(user: any,id:number):Observable<Budget>{
    const url=`${this.baseurl}/${user.id}`;

     return this.http.put<Budget>(url,user).pipe(catchError(this.handleError));;
   }
  //  public editbooks(user: any):Observable<Budget>{
  //   const url=`${this.baseurl}/${user.id}`;

  //    return this.http.put<Budget>(url,user).pipe(catchError(this.handleError));;
  //  }

}