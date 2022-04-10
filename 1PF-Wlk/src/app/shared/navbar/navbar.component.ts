import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toLinks(){
    document.getElementById('links')?.scrollIntoView()
  }

  toRecipes(){
    document.getElementById('content')?.scrollIntoView()
  }
}
