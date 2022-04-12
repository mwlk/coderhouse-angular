import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { students } from 'src/students';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  public studentsList: Student[] = [];

  constructor() {}

  GetAllStudents(): Student[] {
    this.studentsList = students;

    return this.studentsList;
  }

  DeleteStudent(id: number): Student[] {
    return this.studentsList.splice(id, 1);
  }

  AddStudent(student: Student): Student[] {
    student.ID = (this.studentsList.length + 1).toString();

    this.studentsList.push(student);

    console.log(this.studentsList);

    return this.studentsList;
  }
}
