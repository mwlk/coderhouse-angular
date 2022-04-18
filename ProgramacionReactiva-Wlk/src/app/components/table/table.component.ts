import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Student } from 'src/app/models/student';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  public students: Student[] = [];
  public studentsPrm: Student[] = [];
  public promiseStudent!: Promise<Student[]>;

  public studentSuscripcion!: Subscription;
  public students$!: Observable<Student[]>

  constructor(public dialog: MatDialog, private _dataSvc: DataService) {}
  ngOnDestroy(): void {
    this.studentSuscripcion.unsubscribe();
  }

  ngOnInit(): void {
    // this._dataSvc.GetObservable().subscribe((res) => {
    //   console.log(`observable ${res}`);
    //   this.students = res;
    // });

    this.ObservableFunction();

    this.PromiseFunction();
  }

  ObservableFunction() {
    // this.students$ = this._dataSvc.GetFilter()

    this.studentSuscripcion = this._dataSvc.GetFilter().subscribe({
      // console.log(`filter ${JSON.stringify(res)}`);
      next: (res) => {
        this.students = res;
      },
      error: (error) => {
        console.log(`an error:  ${error}`);
      },
    });
  }

  PromiseFunction() {
    this.promiseStudent = this._dataSvc.GetPromise();

    this.promiseStudent
      .then((response) => {
        // console.log(`promise ${JSON.stringify(students)}`);
        this.studentsPrm = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  openModal() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      autoFocus: true,
    });
  }
}
