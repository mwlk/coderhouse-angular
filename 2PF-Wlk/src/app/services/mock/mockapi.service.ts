import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(private _http: HttpClient) { }

  GetAllUsers(){
    return this._http.get('users')
  }
}
