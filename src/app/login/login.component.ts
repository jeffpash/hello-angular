import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { LoginService } from '../common/service/login.service';
import { LoginResponse } from '../common/data/loginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  p : Personne = new Personne();
  message : string = null;

  onLogin() {
    console.log(JSON.stringify(this.p));
    this.loginService.verifierAuth(this.p.username, this.p.password, "admin")
    .subscribe(
        (responseObject:LoginResponse) => { 
          this.message = responseObject.message;
          //this.message = JSON.stringify(responseObject);
        },
        (err) => {
          console.log(err);
          this.message = err.message;
        }
    );
    
  }

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

}
