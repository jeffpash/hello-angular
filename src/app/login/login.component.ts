import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  p : Personne = new Personne();

  onLogin() {
    console.log(JSON.stringify(this.p));
    
  }

  constructor() { }

  ngOnInit() {
  }

}
