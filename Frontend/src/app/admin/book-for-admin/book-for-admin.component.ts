import { Component } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-for-admin',
  templateUrl: './book-for-admin.component.html',
  styleUrls: ['./book-for-admin.component.scss']
})
export class BookForAdminComponent {

  
  updatedCurrentElementId:any;
  currentPage = 1; // start with the first page
  itemsPerPage = 6; // show 5 items per page

  allBook:any;
  constructor(private __bookServices: BooksService)
  {
    this.__bookServices.getBooks().subscribe((res)=>
    {
      this.allBook = res;
      console.log(this.allBook)
    })
  }

  addBook(form:any)
  {
    let formValue:object = form.value;
    this.__bookServices.addBook(formValue).subscribe(
      {
      next: res => {
        alert('Added Successfully')
        let layer:any = document.getElementById("layer");
        layer.style.display = "none";
      },
      error: err => console.log(`${err} Author is already exist`),
      complete: () => {

     }
    })
    }

    showAddBox()
    {
      let layer:any = document.getElementById("layer");
      layer.style.display = "block";
    }
    closeAddBox()
    {
      let layer:any = document.getElementById("layer");
      layer.style.display = "none";
    }

    showUpdateBox(id:any)
    {
      let updatelayer:any = document.getElementById("updatelayer");
      updatelayer.style.display = "block";
      this.updatedCurrentElementId = id;
    }
    closeUpdateBox()
    {
      let updatelayer:any = document.getElementById("updatelayer");
      updatelayer.style.display = "none";
    }
    updateBook(form:any)
    {
      let formValue:object = form.value
      this.__bookServices.updateBook(this.updatedCurrentElementId,formValue).subscribe(
        {
        next: res => {
          alert('Update Successfully')
          let updatelayer:any = document.getElementById("updatelayer");
          updatelayer.style.display = "none";
        },
        error: err => alert(`${err.error.status} Author is already exist`),
        complete: () => {
  
        }
      })
    }

    deleteBook(id:any)
    {
     let prompt:any = window.prompt("Are You Sure to delete plz write yes or no");
     if(prompt == "yes" ||prompt == "Yes" || prompt == "YES" )
     {
        this.__bookServices.deleteBook(id).subscribe((res)=>
        {
          console.log(res.data)
        })
     }
    }



}
