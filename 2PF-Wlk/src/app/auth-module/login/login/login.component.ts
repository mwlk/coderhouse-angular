import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { User } from 'src/app/models/user';
import { MockapiService } from 'src/app/services/mock/mockapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private _router: Router,private _mockapiSvc: MockapiService) {
    this.formLogin = this.prepareForm();
  }

  prepareForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  login() {
    this._mockapiSvc.GetAllUsers().subscribe(
      (res: any) => {
        let userList: User[] = res

        let returned: string | User | undefined;
       
        userList.forEach(element => {
          if(element.username == this.formLogin.get('username')?.value && element.password === this.formLogin.get('password')?.value){
            returned = element;
          }
        })

        console.log(returned);

        if(returned !== undefined){
         Swal.fire({
          title: 'Bienvenido',
          text: 'Login con Éxito', 
          icon: 'success',
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#330033',
         }).then(conf =>{
           if(conf.isConfirmed){
             localStorage.setItem('user', JSON.stringify(returned))
             this._router.navigateByUrl('admin')
           }
         })
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
