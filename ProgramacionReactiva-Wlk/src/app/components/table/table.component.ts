import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  constructor(public dialog: MatDialog, private _dataSvc: DataService) {}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this._dataSvc.GetFilter().subscribe((res) => {
      console.log(`filter ${JSON.stringify(res)}`);
    });

    this._dataSvc.GetObservable().subscribe((res) => {
      console.log(`observable ${res}`);
    });

    this._dataSvc
      .GetPromise()
      .then((students) => {
        console.log(`promise ${JSON.stringify(students)}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openModal() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px'
    })
  }
}
