import {
  Directive,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
})
export class CustomDirectiveDirective implements OnInit {
  @Input() appCustomDirective: unknown;

  constructor(private _element: ElementRef) {

  }

  ngOnInit(): void {
    this.Customize()
  }

  Customize(){
    this._element.nativeElement.style.fontSize = '20px'
    this._element.nativeElement.style.textAlign = 'center'
  }

}
