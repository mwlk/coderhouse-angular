import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { students } from 'src/students';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public studentList = students;

  public studentsPromise!: Promise<Student[]>;
  public students$!: Observable<Student[]>;

  constructor() {
    this.studentsPromise = new Promise((res, rej) => {
      // if (this.studentList.length > 0) {
      //   res(this.studentList);
      // } else {
      //   rej(this.studentList);
      // }
      this.studentList.length > 0 ? res(this.studentList) : rej([]);
    });

    this.students$ = new Observable((res) => {
      if (this.studentList.length > 0) {
        res.next(this.studentList);
        res.complete();
      } else {
        res.error('No Data Avalaible');
      }
    });
  }

  GetPromise(): Promise<Student[]> {
    return this.studentsPromise;
  }

  GetObservable(): Observable<Student[]> {
    return this.students$;
  }

  GetFilter() {
    return this.students$.pipe(
      map((curso: Student[]) => curso.filter((person) => person.Class > 60))
    );
  }

  AddStudent(student: any) {
    // console.log(`param = ${JSON.stringify(student)}`)

    var newStudent: Student = {
      ID: (this.studentList.length + 1).toString(),
      Name: (student.surname + ' ' + student.name).toLocaleUpperCase(),
      Class: student.class,
    };

    this.studentList.push(newStudent);

    console.log(this.studentList);
    return this.students$;
  }
}
