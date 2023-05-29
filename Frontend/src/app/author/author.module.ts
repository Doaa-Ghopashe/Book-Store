import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';



@NgModule({
  declarations: [
    AuthorsComponent,
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AuthorDetailsComponent,
    AuthorsComponent
  ]
})
export class AuthorModule { }
