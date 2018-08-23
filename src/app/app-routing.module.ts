import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllNotesComponent } from './get-all-notes/get-all-notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { DeleteNoteComponent } from './delete-note/delete-note.component';
import { EditNoteComponent } from './edit-note/edit-note.component';
//import { DefaultComponentComponent } from './default-component/default-component.component';
import { StartComponent } from './start/start.component';
import { SearchByTitleComponent } from './search-by-title/search-by-title.component';

const routes: Routes = [

  {path: 'notes' , component: GetAllNotesComponent},
  {path: 'post/notes' , component : CreateNoteComponent},
  {path: ':id' , component : DeleteNoteComponent},
  {path: 'edit/:id' , component : EditNoteComponent},
  {path: 'gettitle/:title' , component: SearchByTitleComponent},
  {path: '', component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const routingComponents = [GetAllNotesComponent, CreateNoteComponent, DeleteNoteComponent , EditNoteComponent, SearchByTitleComponent, StartComponent];
