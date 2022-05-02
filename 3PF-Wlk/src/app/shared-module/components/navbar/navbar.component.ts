import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public userLog: any
  constructor(private _router: Router) {}

  ngOnInit(): void {
    if (
      localStorage.getItem('user') != null ||
      localStorage.getItem('user') != undefined
    ) {
      this.userLog = (localStorage.getItem('user')) 

      console.log(this.userLog)
    }
  }

  logout() {
    Swal.fire({
      title: 'Logout',
      text: 'Desea Salir?',
      icon: 'question',
      confirmButtonText: 'Aceptar',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#330033',
      cancelButtonColor: '#BA063C',
    }).then((conf) => {
      if (conf.isConfirmed) {
        localStorage.removeItem('user');

        this._router.navigateByUrl('');
      }
    });
  }
}
