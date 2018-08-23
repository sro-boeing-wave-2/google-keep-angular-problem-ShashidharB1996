import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteModel } from '../NoteModel';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent implements OnInit {
  public id;
  public note : NoteModel;
  //public noteModel : NoteModel;
  //public noteModel = new NoteModel(this.id ,'new Title','new Body',false,[{LabelText: " new label1"}],[{CheckListText : "new chk1"}]);
  constructor(private _NoteService : NoteServiceService , private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.getnotebyid();
    //this.note.ID = this.note.ID;
   // console.log(this.noteModel.ID);
    //console.log(this.note.Title);
  }

  getnotebyid(){
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this._NoteService.getNoteByID(this.id)
    .subscribe(data =>this.note=data);
  }

  onSubmit() {
    this._NoteService.putNote(this.id, this.note)
    .subscribe(data => console.log('Success',data), err => console.log('Error', err));
    this.router.navigate(['/notes']);
    //console.log(this.id);
  }
}
