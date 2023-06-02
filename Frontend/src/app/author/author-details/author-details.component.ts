import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/interfaces/author';
import { AuthorService } from 'src/app/services/author.service';
import { AvgrateService } from 'src/app/services/avgrate.service';
import { BooksService } from 'src/app/services/books.service';
import { CategoryService } from 'src/app/services/category.service';
import { DecodetokenService } from 'src/app/services/decodetoken.service';
import { ReservedbooksService } from 'src/app/services/reservedbooks.service';
import { UserbooksService } from 'src/app/services/userbooks.service';
@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent {
  //first we need to get all authors then i get a specific author

  author!: Author;
  author_id!: string

  constructor(private userbook: UserbooksService,
    private Author: AuthorService,
    private activetedrouter: ActivatedRoute) { }

  ngOnInit() {
    this.author_id = this.activetedrouter.snapshot.params['id']

    this.Author.loadSpecificAuthor(this.author_id);

    this.Author.getSpecificAuthor().subscribe((res:any)=>{
      this.author = res;
    })


  }

}
