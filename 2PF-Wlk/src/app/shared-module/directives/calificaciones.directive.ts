import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCalificaciones]',
})
export class CalificacionesDirective implements OnInit, OnChanges {
  @Input('appCalificaciones') nota!: number;

  constructor(private _element: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.Evaluate();
  }
  ngOnInit(): void {
    this.Evaluate();
  }

  Evaluate() {
    if (this.nota >= 75) {
      this._element.nativeElement.style.backgroundColor = 'green';
      return;
    }
    if(this.nota < 75 && this.nota >= 40){
      this._element.nativeElement.style.backgroundColor = 'yellow';
      return;
    }
    if(this.nota < 40){
      this._element.nativeElement.style.backgroundColor = 'red';
    }
  }
}
