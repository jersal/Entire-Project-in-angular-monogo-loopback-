import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { LoginService }     from '../shared/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private _loginService: LoginService) { }

  ngOnInit() {
  }

  logout(event){
    const token = sessionStorage.getItem('token');
  	this._loginService.logout(token).subscribe(
  		data=>{
  			sessionStorage.clear();
  			this.router.navigate(['/login']);
  		},err=>{
  			alert('logout failed');
  		}
  		)
   }

}
