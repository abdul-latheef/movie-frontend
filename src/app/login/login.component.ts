import { Component } from '@angular/core';
import { GeneralService } from '../service/general.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName = "";
  password="";
  errorMsg="";

  constructor(private generalService : GeneralService, private router: Router){

  }

  loginForm(){
    if(this.userName.trim().length === 0)
      {
        this.errorMsg="User name field is required"
      } else if(this.password.trim().length === 0){
        this.errorMsg="Password field is required"
      } else{
        this.errorMsg="";
        const res = this.generalService.login(this.userName, this.password)
          if(res === 200){
            this.router.navigate(['home'])
          } else {
            this.errorMsg="Invalid creditional"
          }
        
      }
  }

}
