import { Injectable } from '@angular/core';
import { students } from 'src/students';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public studentsList: Student[] = []
  constructor() { }


  GetAllStudents(): Student[]{
    this.studentsList = students

    return this.studentsList;
  }

  DeleteStudent(id: number): Student[]{
    return this.studentsList.splice(id, 1)
  }
}
