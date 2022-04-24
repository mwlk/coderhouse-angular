import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  createForm: FormGroup;
  constructor(private _dataSvc: DataService) {
    this.createForm = this.prepareFormGroup();
  }

  prepareFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      class: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.max(100),
      ]),
    });
  }

  SubmitForm() {
    this._dataSvc.AddStudent(this.createForm.value);
  }

  Reset() {
    this.createForm.reset();
  }
  ngOnInit(): void {}
}
