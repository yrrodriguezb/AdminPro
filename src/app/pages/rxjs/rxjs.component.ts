import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  suscription: Subscription;

  constructor() {
    this.suscription = this.regresaObservable()
      .subscribe(
        numero => console.log('Subcripcion ', numero),
        err => console.log('Error: ', err),
        () => console.log('El observable termino')
      );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.suscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;

      const interval = setInterval(() => {
        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next(salida);

        /* if (contador === 3) {
          clearInterval(interval);
          observer.complete();
        } */

        /*if (contador === 2) {
          clearInterval(interval);
          observer.error('Error...');
        } */
      }, 1000);
    }).pipe(
      map(res => res.valor),
      filter((valor, index) => {
        return valor % 2 !== 0;
      })
    );
  }

}
