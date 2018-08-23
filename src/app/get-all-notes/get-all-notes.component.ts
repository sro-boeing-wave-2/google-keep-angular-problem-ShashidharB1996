import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';
import { NoteModel } from '../NoteModel';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
//import {DomSanitizer} from '@angular/platform-browser';
//import {MatIconRegistry} from '@angular/material';



@Component({
  selector: 'app-get-all-notes',
  templateUrl:'./get-all-notes.component.html'/*  `
  <h2> Get ALL Notes </h2>
  <ul *ngFor="let note of notes">
  <li>{{note.title}} ----- {{note.id}} ------ {{note.plainText}}</li>
  </ul>
  ` */,
  styleUrls: ['./get-all-notes.component.css']
})

/* export class IconSvgExample {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'delete-icon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/svg-icons/baseline-delete-24px.svg'));
  }
} */


export class GetAllNotesComponent implements OnInit {

  public notes = [];
  //public note : NoteModel;


  constructor(private _noteService: NoteServiceService, private router: Router) { }

  ngOnInit() {
    this._noteService.getAllNotes()
    .subscribe(x =>this.notes=x);
  }

  deleteClick(note){
    this.router.navigate(['',note.id]);
  }

  editClick(note){
    this.router.navigate(['/edit',note.id]);
  }

  pinClick(pin){
    console.log(pin);
  }

}
