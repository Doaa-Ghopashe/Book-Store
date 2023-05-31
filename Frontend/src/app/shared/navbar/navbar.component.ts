import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  isLog:any;
  isAdmine:any;
  constructor( private _authservice :AuthService)
  {

    this.isAdmine = localStorage.getItem("isAdmine");
    console.log(this.isAdmine)

    this._authservice.logged()
    this.isLog = this._authservice.isLogin;
    console.log(this.isLog)
  }
}
