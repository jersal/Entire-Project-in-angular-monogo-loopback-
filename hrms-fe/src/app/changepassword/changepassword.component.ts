import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { ChangepasswordService }     from '../changepassword/changepassword.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private router: Router, private _changePasswordService:ChangepasswordService) { }

  ngOnInit() {
  	const id = sessionStorage.getItem('userId');
        if(!id){
           this.router.navigate(['/login']); 
        }
    }

    OnSubmit(oldPassword,newPassword){
       const passwords:any = {};
       passwords.oldPassword = oldPassword;
       passwords.newPassword = newPassword;
       this._changePasswordService.changePassword(passwords).subscribe(

              response =>{
              	  alert("PASSWORD SUCCESSFULLY CHANGED");
                  this.router.navigate(['/home']); 
                  
              },
              err => {
                  alert("Invalid Current Password");
              }
          )
    }

}
