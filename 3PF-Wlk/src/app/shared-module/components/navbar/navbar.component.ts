import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

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
