import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  userList: User[] = [];
  userLog?: User = undefined;
  constructor(private _router: Router, private _mockapiSvc: MockapiService) {
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
    this._mockapiSvc
      .login(
        this.formLogin.get('username')?.value,
        this.formLogin.get('password')?.value
      )
      .subscribe(
        (res: any) => {
          if (res.length > 0) {
            this.userLog = res[0];
            console.log(this.userLog);

            if (this.userLog != undefined) {
              Swal.fire({
                title: 'Bienvenido',
                text: 'Login con Éxito',
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#330033',
              }).then((confirm) => {
                if (confirm.isConfirmed) {
                  localStorage.setItem('user', JSON.stringify(this.userLog?.name));
                  this._router.navigateByUrl('admin');
                }
              });
            }
          } else {
            Swal.fire({
              title: 'Error',
              text: 'Revise Los Datos Ingresados',
              icon: 'error',
              confirmButtonText: 'Aceptar',
              confirmButtonColor: '#330033',
            });
          }
        },
        (err) => {
          Swal.fire({
            title: 'Error',
            text: 'Un Error con API',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#330033',
          });
        }
      );
  }
}
