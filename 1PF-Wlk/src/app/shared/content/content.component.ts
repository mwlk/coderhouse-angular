import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnChanges {
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

  constructor(private _studentSvc: StudentService) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = this._studentSvc.GetAllStudents();
    console.log(`Change Detected ${this.dataSource}`);
  }

  ngOnInit(): void {
    this.dataSource = this._studentSvc.GetAllStudents();
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
