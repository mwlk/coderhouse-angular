import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { countries } from 'src/countries';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
})
export class FormComponentComponent implements OnInit {
  public formExample: FormGroup;
  private regexPhone: string = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$';
  public arrayCountries: any = []
  today = new Date();

  constructor() {
    this.formExample = this.CreateFormGroup();
  }

  CreateFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      surname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      phone: new FormControl('', [Validators.pattern(this.regexPhone)]),
      country: new FormControl("", [Validators.required]),
      mail: new FormControl("mirkoivowlk@gmail.com", [Validators.required, Validators.email, Validators.minLength(8), Validators.maxLength(25)]),
      date: new FormControl(formatDate(this.today, "yyyy-MM-dd", "en"), [Validators.required])
    });
  }

  SubmitForm() {
    if(!this.formExample.valid){
      this.showSwal("Check", "Review Data", "wanning")
    }else{
      this.showSwal("Good Job", "Data is OK", "success")

    }
  }

  Reset() {
    this.formExample.reset();
  }

  ngOnInit(): void {
    this.arrayCountries = countries;

  }

  showSwal(title: any, text: any, icon: any) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#FF5F00",
    });
  }
}
