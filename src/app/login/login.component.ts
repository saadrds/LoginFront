import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private token : string="";
  constructor(private loginservice : LoginserviceService,private router : Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.router.navigate(['/home']);
    }
  }

  onLogin(loginxform: NgForm){
    let a = this.loginservice.postAgent(loginxform.value).subscribe(
     
      (err : HttpErrorResponse) => {
        console.log (err);
        if(err.status == 200){
          console.log("user founded");
          this.token = err.error.text;
          localStorage.setItem("token",this.token);
          this.router.navigate(['/home']);
        }
        else{
          console.log("wrong username or password!");
        }
  })}
}
