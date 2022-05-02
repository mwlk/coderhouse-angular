import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(private _http: HttpClient) { }

  GetAllUsers(){
    return this._http.get('users')
  }
}
