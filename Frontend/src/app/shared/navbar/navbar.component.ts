import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  isLog:any;
  isadmine:boolean = false;
  constructor( private _authservice :AuthService)
  {

    let cuurentUserSate = localStorage.getItem("Admin");
    if(cuurentUserSate == "true")
    {
      this.isadmine = true;
      console.log(this.isadmine)
    }
    else
    {
      this.isadmine = false;
      console.log(this.isadmine)
    }

    this._authservice.logged()
    this.isLog = this._authservice.isLogin;
<<<<<<< HEAD
    // console.log(this.isLog);
=======
>>>>>>> 36239c9a055f7e833c2bc4a23edbbcebc0fe2495

  }
}
