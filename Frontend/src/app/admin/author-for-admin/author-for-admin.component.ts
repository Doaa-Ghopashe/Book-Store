import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import {FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-for-admin',
  templateUrl: './author-for-admin.component.html',
  styleUrls: ['./author-for-admin.component.scss']
})
export class AuthorForAdminComponent {

  
  updatedCurrentElementId:any;
  currentPage = 1; // start with the first page
  itemsPerPage = 4; // show 5 items per page

  allAuthores:any;
  constructor(private __authServices: AuthorService,private fbuilder:FormBuilder)
  {
    this.__authServices.getAuthor().subscribe((res)=>
    {
      this.allAuthores = res;
      console.log(this.allAuthores)
    })
    this.addauthorform=this.fbuilder.group({
      firstName:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      lastName:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      breif:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],

      birthOfDate:[null,[Validators.required]],
     Image:['']
    })
  }

  // addAuthor(form:any)
  // {
  //   let formValue:object = form.value;
  //   console.log(form.value);
    
  //       this.__authServices.addAuthor(formValue).subscribe(
  //     {
        
  //  next: res => {
  //       alert('Added Successfully')
  //       let layer:any = document.getElementById("layer");
  //       layer.style.display = "none";
  //     },
  //     error: err => console.log(`${err} Author is already exist`),
  //     complete: () => {

  //    }
    
  //   })

  //   }

  //   showAddBox()
  //   {
  //     let layer:any = document.getElementById("layer");
  //     layer.style.display = "block";
  //   }
  //   closeAddBox()
  //   {
  //     let layer:any = document.getElementById("layer");
  //     layer.style.display = "none";
  //   }

  //   showUpdateBox(id:any)
  //   {
  //     let updatelayer:any = document.getElementById("updatelayer");
  //     updatelayer.style.display = "block";
  //     this.updatedCurrentElementId = id;
  //   }
  //   closeUpdateBox()
  //   {
  //     let updatelayer:any = document.getElementById("updatelayer");
  //     updatelayer.style.display = "none";
  //   }
  //   updateAuthor(form:any)
  //   {
  //     let formValue:object = form.value
  //     this.__authServices.updateAuthor(this.updatedCurrentElementId,formValue).subscribe(
  //       {
  //       next: res => {
  //         alert('Update Successfully')
  //         let updatelayer:any = document.getElementById("updatelayer");
  //         updatelayer.style.display = "none";
  //       },
  //       error: err => alert(`${err.error.status} Author is already exist`),
  //       complete: () => {
  
  //       }
  //     })
  //   }

  //   deleteAuthor(id:any)
  //   {
  //    let prompt:any = window.prompt("Are You Sure to delete plz write yes or no");
  //    if(prompt == "yes" ||prompt == "Yes" || prompt == "YES" )
  //    {
  //       this.__authServices.deleteAuthor(id).subscribe(
  //         {
  //         next: res => {
  //           alert('Deleted Successfully');
  //         },
  //         error: err => console.log(`PLZ tray again`),
  //         complete: () => {
    
  //        }
  //       })
  //    }
  //   }

  addauthorform!:FormGroup;
  imagefile!:File;

//  constructor(private fbuilder:FormBuilder , private authorserv:AuthorservService){
//    this.addauthorform=this.fbuilder.group({
//      f_name:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
//      l_name:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
//      birth_date:[null,[Validators.required]],
//      photo:['']
//    })
//  }

  addphoto(event:any){
   if(event.target.files.length>0){
    console.log(event.target.files.length);
    
     this.imagefile=event.target.files[0];

     this.addauthorform.patchValue({
       photo:this.imagefile
     });
   }
 }

  addauthor(){

       const formdata=new FormData();
       formdata.append('f_name',this.addauthorform.get('f_name')?.value)
       formdata.append('l_name',this.addauthorform.get('l_name')?.value)
       formdata.append('birth_date',this.addauthorform.get('birth_date')?.value)
       formdata.append('photo',this.imagefile)
         console.log(formdata.get('photo'));
         
       this.__authServices.addAuthor(formdata).subscribe(res=>{
         console.log(res);
         location.replace('/admin/author');
       },error=>{
         console.log(error);
         
       });
    
     
 }

}
