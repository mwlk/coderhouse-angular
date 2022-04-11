import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css'],
})
export class CreateFormComponent implements OnInit {
  public createForm: FormGroup;
  constructor(private _studentSvc: StudentService) {
    this.createForm = this.CreateFormGroup();
  }
  CreateFormGroup() {
    return new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      class: new FormControl('0', [Validators.required])



    });
  }
  ngOnInit(): void {}
  SubmitForm() {
    let studentAux: Student = {
      Name: this.createForm.get("name")?.value,
      Surname: this.createForm.get("surname")?.value,
      Class: this.createForm.get("class")?.value
    };


    this._studentSvc.AddStudent(studentAux)

  }
  Reset() {
    this.createForm.reset();
  }
}
