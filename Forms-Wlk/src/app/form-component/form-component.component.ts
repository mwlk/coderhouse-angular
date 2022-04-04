import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  public formExample: FormGroup
  constructor() {
    this.formExample = this.CreateFormGroup();
  }

  CreateFormGroup(){
    return new FormGroup({})
  }

  SubmitForm(value: any){
    alert("sumbit")
  }

  ngOnInit(): void {
  }

}
