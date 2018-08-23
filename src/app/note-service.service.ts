import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../node_modules/@angular/common/http';
import { INote } from './Note';
import { Observable, throwError } from '../../node_modules/rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { NoteModel } from './NoteModel';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Origin': '*',
    //'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  })
};

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  private _url: string = "https://localhost:44333/api/Notes";
  constructor(private http: HttpClient) {

  }

  getAllNotes(): Observable<INote[]> {
    return this.http.get<INote[]>(this._url).pipe(catchError(this.errorHandler))
  }

  getNoteByID(id : number) : Observable<NoteModel> {
    let searchUrl = "https://localhost:44333/api/Notes/getbyid/" + id;
    return this.http.get<NoteModel>(searchUrl).pipe(catchError(this.errorHandler));
  }

  getNotesByTitle(title : string): Observable<INote[]> {
    let searchUrl = "https://localhost:44333/api/Notes/getbytitle/" + title;
    return this.http.get<INote[]>(searchUrl).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }

  /*     AddNote(url: string, contact: INote): Observable <any> {
        return this.http.post(url, JSON.stringify(contact), httpOptions).pipe(catchError(this.handleError));
    } */

  postNote(note: NoteModel): Observable<NoteModel> {
    return this.http.post<NoteModel>(this._url, note, httpOptions).pipe(catchError(this.errorHandler));
  }

  putNote(id : number, note : NoteModel) : Observable<NoteModel>{
    return this.http.put<NoteModel>(this._url + "/" + id, note, httpOptions).pipe(catchError(this.errorHandler));
  }

  deleteNote(id: number){
    let deleteUrl = "https://localhost:44333/api/Notes/" + id;
    return this.http.delete(deleteUrl);
  }
  // custom handler
  /*  private handleError(error: HttpErrorResponse) {
     if (error.error instanceof ErrorEvent) {
         // A client-side or network error occurred. Handle it accordingly.
         console.error('An error occurred:', error.error.message);
     } else {
         // the backend returned an unsuccessful response code.
         // the response body may contain clues as to what went wrong,
         console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
     } */
  // return an observable with a user-facing error message
  /*   return throwError('Something bad happened; please try again later.'); */


  /*   } */
}
