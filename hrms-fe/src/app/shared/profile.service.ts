import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormData, Personal, Work, Spouse, Dependants } from '../data/formData.model';

// import { WorkflowService } from '../workflow/workflow.service';
// import { STEPS }  from '../workflow/workflow.model';
import {Observable} from "rxjs"
import {map} from 'rxjs/operators'
import { Education } from '../education/education';
import { environment } from '../../environments/environment';

@Injectable()
export class ProfileService {
    baseUrl = environment.baseUrl
    private personal:Personal;
    private education: Education;
    private dependants:Dependants;
    private work:Work;
    private spouse:Spouse;
	private API_URL: string = `${this.baseUrl}/api`;
    // private accessToken:string = sessionStorage.getItem('token');
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
	
     
	 readProfile(id): Observable<Personal> {
        let options = this.initRequestOptions(); 
        return this.http.get<Personal>(`${this.API_URL}/personals/getPersonal/${id}`, {headers:options});
     }

     createProfile(id, personal): Observable<Personal> {
        let options = this.initRequestOptions();
     	return this.http.post<Personal>(`${this.API_URL}/personals/postPersonal/${id}`, personal ,{headers:options});
     }
     
     readWork(id): Observable<Work> {
        let options = this.initRequestOptions(); 
    	return this.http.get<Work>(`${this.API_URL}/works/getWork/${id}`,{headers:options});
     }

     createWork(id, work): Observable<Work> {
        let options = this.initRequestOptions();
     	return this.http.post<Work>(`${this.API_URL}/works/postWork/${id}`, work ,{headers:options});
     }
      readSpouse(id): Observable<Spouse> {
        let options = this.initRequestOptions(); 
        return this.http.get<Spouse>(`${this.API_URL}/spouses/getSpouse/${id}`,{headers:options});
     }

     createSpouse(id, spouse): Observable<Spouse> {
         let options = this.initRequestOptions();
         return this.http.post<Spouse>(`${this.API_URL}/spouses/postSpouse/${id}`, spouse ,{headers:options});
     }

	 readEducation(id): Observable<Education> {
        let options = this.initRequestOptions(); 
    	return this.http.get<Education>(`${this.API_URL}/education/getEducation/${id}`,{headers:options});
     }

     createEducation(userId,education): Observable<Education> {
         let options = this.initRequestOptions();
     	return this.http.post<Education>(`${this.API_URL}/education/postEducation/${userId}`, education ,{headers:options});
     }
     readDependants(id): Observable<Dependants> {
        let options = this.initRequestOptions(); 
    	return this.http.get<Dependants>(`${this.API_URL}/dependants/getDependants/${id}`,{headers:options});
     }

     createDependants(id,dependants): Observable<Dependants> {
        let options = this.initRequestOptions(); 
     	return this.http.post<Dependants>(`${this.API_URL}/dependants/postDependants/${id}`, dependants ,{headers:options});
     }
	
}


