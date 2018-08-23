import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';
import { NoteModel } from '../NoteModel';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-by-title',
  templateUrl:'./search-by-title.component.html',
  styleUrls: ['./search-by-title.component.css']
})
export class SearchByTitleComponent implements OnInit {

  title : string;
  note: NoteModel;
  public notes = [];
  constructor(private _noteService: NoteServiceService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    this._noteService.getNotesByTitle(this.title)
    .subscribe(x =>this.notes=x);
    console.log(this.notes);
  }

  deleteClick(note){
    this.router.navigate(['',note.id]);
  }

  editClick(note){
    this.router.navigate(['/edit',note.id]);
  }
}
