import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.css']
})
export class DeleteNoteComponent implements OnInit {
  public deleteID;
  constructor(private _NoteService : NoteServiceService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.deleteID = parseInt(this.route.snapshot.paramMap.get('id'));
    this._NoteService.deleteNote(this.deleteID)
    .subscribe(data => console.log('Success',data), err => console.log('Error', err));
    console.log(this.deleteID);
  }
}
