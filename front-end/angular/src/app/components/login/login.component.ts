import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _router:Router)
  {
  }

  regestrationForm:FormGroup = new FormGroup(
    {
      email :  new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.pattern(/^[a-z]{1}[0-9]{3,8}/)]),
    }
  )

  login()
  {
      // if(this.regestrationForm.status=='INVALID')
      // {
      //   return;
      // }
      // this.auth.signUp(this.regestrationForm.value).subscribe(
      // {
      //   next: res => {
      //     this._router.navigateByUrl('/login')
      //   },
      //   error: err => alert(err.error.message),
      //   complete: () => {
      //     // let spin = document.getElementById("spin")!;
      //     // spin.style.display = "none";
      //   }
      // })
    }

    navigate()
    {
      this._router.navigateByUrl('/user/register')
    }

  
 
}
