import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private host = "https://localhost:44364/api";

  constructor(private http:HttpClient) { }

  public getUser() : Observable<User>{
    var tokenHeader = new HttpHeaders({'Authorization' : 'Bearer '+localStorage.getItem("token")});
    return this.http.get<User>(this.host + "/Login",{headers : tokenHeader});
  }

  public postAgent(agent : any) : Observable<any>{
    console.log("post method entred");
    console.log(agent);
    return this.http.post<any>(this.host + "/Login",agent);
  }
  
}
