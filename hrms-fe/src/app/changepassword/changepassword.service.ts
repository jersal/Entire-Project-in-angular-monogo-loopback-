import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable()
export class ChangepasswordService {
   baseUrl = environment.baseUrl
	private API_URL: string = `${this.baseUrl}/api`;
	// private headers = new HttpHeaders().set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

  initRequestOptions() {
        let token = sessionStorage.getItem('token');
        let headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'access_token': token
        };
        let headersConfig = new HttpHeaders(headers);
        return headersConfig
    }

   changePassword(passwords) {
   	    let options = this.initRequestOptions(); 
     	return this.http.post(`${this.API_URL}/users/userChangePassword`, passwords, {headers:options} );
     }

}
