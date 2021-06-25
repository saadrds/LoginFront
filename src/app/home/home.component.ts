import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class 
HomeComponent implements OnInit {

  constructor(private router : Router, private loginService : LoginserviceService) { }

  ngOnInit(): void {
    if(!localStorage.getItem("token")){
        this.router.navigate(['/login']);
    }
    else{
      this.getUser();
    }
  }

  public getUser(){
    this.loginService.getUser().subscribe(
      (response)=>{console.log(response)},
      (error : HttpErrorResponse)=>{
        console.log("er ",error);
      }
    );
  }

}
