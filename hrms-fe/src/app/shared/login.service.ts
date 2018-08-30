import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Login }            from '../login/login.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS }  from '../workflow/workflow.model';
import {Observable} from "rxjs"
import { environment } from '../../environments/environment';
@Injectable()
export class LoginService {

    baseUrl = environment.baseUrl
    private login:Login;
	private API_URL: string = `${this.baseUrl}/api`;
	private headers = new HttpHeaders().set('Content-Type','application/json');
	constructor(private http:HttpClient) { }
	

     getlogin(credentials): Observable<Login> {
     	return this.http.post<Login>(`${this.API_URL}/users/userLogin`, credentials);
     }

     logout(token) {
        return this.http.get(`${this.API_URL}/users/userlogout/${token}`,{headers:this.headers});
     }

}
