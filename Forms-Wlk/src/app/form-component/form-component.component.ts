import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { countries } from 'src/countries';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
})
export class FormComponentComponent implements OnInit {
  public formExample: FormGroup;
  private regexPhone: string = '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$';
  public arrayCountries: any = []

  constructor() {
    this.formExample = this.CreateFormGroup();
  }

  CreateFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.pattern(this.regexPhone)]),
      country: new FormControl("", [Validators.required])
    });
  }

  SubmitForm(value: any) {
   console.log(value)
  }

  Reset() {
    this.formExample.reset();
  }

  ngOnInit(): void {
    this.arrayCountries = countries;

  }
}
