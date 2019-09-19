import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../data/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  private _headers =new HttpHeaders({'Content-Type': 'application/json'})

  public verifierAuth(username: string, password: string, roles: string): Observable<LoginResponse> {
    let requestObject = {
      username: username,
      password: password,
      roles: roles
    };
    let url = "./login-api/public/auth";
    return this.http.post<LoginResponse>(url, requestObject, {headers: this._headers});
  }
}
