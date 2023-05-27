import { Component } from '@angular/core';
import { Author } from 'src/app/interfaces/author';
import { AuthorService } from 'src/app/services/author.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent {
allAuthors!:Author[];
constructor(private _AuthorService:AuthorService){
this._AuthorService.getAuthor().subscribe((res)=>{
this.allAuthors=res
console.log(res);

})
}
}
