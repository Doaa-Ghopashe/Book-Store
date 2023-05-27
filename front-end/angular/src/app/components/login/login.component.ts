import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _router:Router, private auth: AuthService)
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
      if(this.regestrationForm.status=='INVALID')
      {
        return;
      }
      this.auth.login(this.regestrationForm.value).subscribe(
      {
        next: res => {
          this._router.navigateByUrl('/home')
        },
        error: err => alert(err.error.message),
        complete: () => {
        }
      })
    }

    navigate()
    {
      this._router.navigateByUrl('/user/register')
    }

  
 
}