import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoteModel } from './NoteModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  _url = '';

  constructor(private _http: HttpClient) { }

  postNote(note : NoteModel){
    this._http.post<NoteModel>(this._url, note)
  }
}
