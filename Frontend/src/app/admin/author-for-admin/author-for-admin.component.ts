import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-for-admin',
  templateUrl: './author-for-admin.component.html',
  styleUrls: ['./author-for-admin.component.scss']
})
export class AuthorForAdminComponent {

  
  updatedCurrentElementId:any;
  currentPage = 1; // start with the first page
  itemsPerPage = 6; // show 5 items per page

  allAuthores:any;
  constructor(private __authServices: AuthorService)
  {
    this.__authServices.getAuthor().subscribe((res)=>
    {
      this.allAuthores = res;
      console.log(this.allAuthores)
    })
  }

  addAuthor(form:any)
  {
    let formValue:object = form.value;
    console.log(form.value);
    
        this.__authServices.addAuthor(formValue).subscribe(
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
    updateAuthor(form:any)
    {
      let formValue:object = form.value
      this.__authServices.updateAuthor(this.updatedCurrentElementId,formValue).subscribe(
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

    deleteAuthor(id:any)
    {
     let prompt:any = window.prompt("Are You Sure to delete plz write yes or no");
     if(prompt == "yes" ||prompt == "Yes" || prompt == "YES" )
     {
        this.__authServices.deleteAuthor(id).subscribe(
          {
          next: res => {
            alert('Deleted Successfully');
          },
          error: err => console.log(`PLZ tray again`),
          complete: () => {
    
         }
        })
     }
    }



}
