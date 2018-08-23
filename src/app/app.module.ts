import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { GetAllNotesComponent } from './get-all-notes/get-all-notes.component';
//import { NotExpr } from '@angular/compiler';
import { NoteServiceService } from './note-service.service';
import { HttpClientModule } from '@angular/common/http';
//import { CreateNoteComponent } from './create-note/create-note.component';
import { FormsModule } from '@angular/forms';
//import { DeleteNoteComponent } from './delete-note/delete-note.component';
import { RouterModule } from  '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { PutNoteComponent } from './put-note/put-note.component';
//import { SearchByTitleComponent } from './search-by-title/search-by-title.component';
//import { EditNoteComponent } from './edit-note/edit-note.component';
import {MatButtonModule} from '@angular/material/button';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavigationBarComponent,
    StartComponent
/*     GetAllNotesComponent,
    CreateNoteComponent,
    DeleteNoteComponent,
    PutNoteComponent,
    SearchByTitleComponent,
    EditNoteComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
    //NgForm
  ],
  providers: [NoteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
