import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { LoginService }      from '../shared/login.service';
import { Login }            from '../login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  form: any;
  login:Login;
  userEmail:string;
  password:string;
  constructor(private router: Router, private _loginService:LoginService) {
    }

  ngOnInit() {
  	const id = sessionStorage.getItem('userId'); 
       if(id){
           this.router.navigate(['/home']); 
        }
  }

  OnSubmit(userEmail,password){
       const credentials:any = {};
       credentials.email = userEmail;
       credentials.password = password;
       this._loginService.getlogin(credentials).subscribe(

              response =>{
                  console.log(response);
                  var stringfyObj = JSON.stringify(response);
                  var  parsedObj=JSON.parse(stringfyObj);
                  sessionStorage.setItem('userId',parsedObj.userId);
                  sessionStorage.setItem('token',parsedObj.accessToken);
                  if(parsedObj.passwordReset == true){
                    this.router.navigate(['/changepassword']);
                  }
                  else{
                    this.router.navigate(['/home']);
                  }  
                  
              },
              err => {
                  alert("Invalid Credentials");
              }
          )
    }

  }


        // save(form: any): any {
        // if (!form.valid) {
        //     return false;
        // }




    // goToNext(form: any) {
        // if (this.save(form)) {
        //     // Navigate to the education page
        //     this.router.navigate(['/personal']);
        // }
    // }

// }
