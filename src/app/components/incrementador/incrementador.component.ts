import { Component, EventEmitter, OnInit, Output, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onChanges(data: number) {
    if (data >= 100) {
      this.progreso = 100;
    } else if (data <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = data;
    }

    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor <= 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }
}
