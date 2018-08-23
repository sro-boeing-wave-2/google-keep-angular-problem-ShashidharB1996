import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoteModel } from '../NoteModel';
import { NoteServiceService } from '../note-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  pinnedstatus = [true, false];

/*   labels = ["Todo1","Todo2","Todo3"];
  trackByIndex(index: number, obj: any): any {
     return index;
   } */

  noteModel = new NoteModel(0,'Type your Title','Note body',false,[{LabelText: "label1"}],[{CheckListText : "chk1"}]);
   //notes : NoteModel[];

/*  addItem() {
   this.labels.push('0');
 } */

  constructor(private _NoteService : NoteServiceService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    /* console.log(this.noteModel); */
   //let n = new NoteModel('from Ng','Something written here',false,[{LabelText: "label1"}],[{CheckListText : "chk1"}]);
    this._NoteService.postNote(this.noteModel).subscribe(data => console.log('Success',
  error => console.log('Error', error)));

  this.router.navigate(['/notes']);
  }

}
