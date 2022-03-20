import { Component, OnInit } from '@angular/core';
import { recipes } from '../../../recipes';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  list: any = [];
  constructor() {}

  ngOnInit(): void {
    this.list = recipes;

    console.log(this.list)
  }
}
