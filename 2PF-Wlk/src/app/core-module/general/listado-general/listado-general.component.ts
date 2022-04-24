import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Student } from 'src/app/models/student';
import { DataService } from 'src/app/services/data.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './listado-general.component.html',
  styleUrls: ['./listado-general.component.scss'],
})
export class ListadoGeneralComponent implements OnInit, OnChanges {
  @ViewChild('TableStudents') TableStudents!: MatTable<any>;
  // list: any = [];

  displayedColumns: string[] = [
    'ID',
    'Name',
    'Gender',
    'Class',
    'Club',
    'Persona',
    'Hairstyle',
    'Color',
    'action',
  ];
  dataSource: Student[] = [];

  constructor(private _studentSvc: DataService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this._studentSvc.GetObservable().subscribe((res: Student[]) => {
      this.dataSource = res;
    })
    console.log(`Change Detected ${this.dataSource}`);
  }

  ngOnInit(): void {
    this._studentSvc.GetObservable().subscribe((res: Student[]) => {
      this.dataSource = res;
    });
    console.log(this.dataSource);
  }

  delete(id: number) {
    Swal.fire('Dar de Baja al estudiante', 'Confirmar Operación', 'question').then(
      (conf) => {
        if (conf.isConfirmed) {
          this._studentSvc.DeleteStudent(id);

          this.TableStudents.renderRows();

          Swal.fire('Operación con Éxito', 'El Alumno Fue Dado de Baja', 'success')
        }
      }
    );
  }
}
