import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private host = "https://localhost:44364/api";

  constructor(private http:HttpClient) { }

  public getAgentClients(id : string) : Observable<User[]>{
    return this.http.get<User[]>(this.host + "/getAgentClients?id="+id);
  }

  public postAgent(agent : any) : Observable<any>{
    console.log("post method entred");
    console.log(agent);
    return this.http.post<any>(this.host + "/Login",agent);
  }
  
}
