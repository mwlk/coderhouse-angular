import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {

  constructor(private _http: HttpClient) { }

  GetAllUsers(){
    return this._http.get('users')
  }

  login(username: string, password: string){
    return this._http.get<User[]>('users').pipe(
      map((list: User[]) => {
        return list.filter( u => u.username === username && u.password === password)
      })
    )
  }
}
