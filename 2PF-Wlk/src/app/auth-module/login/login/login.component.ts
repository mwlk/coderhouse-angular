import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MockapiService } from 'src/app/services/mock/mockapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(private _mockapiSvc: MockapiService) {
    this.formLogin = this.prepareForm();
  }

  prepareForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {}
  login() {
    this._mockapiSvc.GetAllUsers().subscribe((res) => {
      console.log(res);
    }, error =>{
      console.log(error);
    })
  }
}
