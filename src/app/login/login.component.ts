import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm:FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  constructor(private _loginservice:LoginService){
    
  }


  login(){

    console.log(this.loginForm);
    this._loginservice.login(this.loginForm.value).subscribe(
      (data:any)=>{
        alert("Login Success!!!");

      },

      (err:any)=>{
        alert("Invalid Credentials");
      }


    )
  }
}


