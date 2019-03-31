import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    const promesa = this.contarTres();

    promesa.then(() => {
      console.log('Termino');
    }).catch(err => {
      console.error('Error', err);
    });
  }

  ngOnInit() {
  }

  contarTres(): Promise<true> {
    return new Promise((resolve, reject) => {
      let contador = 0;

      const interval = setInterval(() => {
        contador++;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}
