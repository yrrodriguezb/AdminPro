import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string = 'usuario'): any {
    let url = `${URL_SERVICES}/img`;

    if (!img) {
      return `${url}/${tipo}/nn`;
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tipo) {
      case 'usuario':
      url = `${url}/usuarios/${img}`;
      break;
      case 'medico':
      url = `${url}/usuarios/${img}`;
      break;
      case 'hospital':
      url = `${url}/usuarios/${img}`;
      break;
    }

    return url;
  }

}
