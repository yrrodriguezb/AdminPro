import { Injectable } from '@angular/core';
import { reject } from 'q';
import { URL_SERVICES } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor() { }

  subirArchivo(archivo: File, tipo: string, id: string) {
    // tslint:disable-next-line:no-shadowed-variable
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      formData.append('imagen', archivo, archivo.name);

      xhr.onreadystatechange = (() => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('Imagen Subida');
          resolve(JSON.parse(xhr.response));
        } else {
          console.log('Error al intentar subir la imagen');
          reject( JSON.parse(xhr.response));
        }
      });

      let url = `${URL_SERVICES}/upload/${tipo}/${id}`;

      xhr.open('PUT', url, true);
      xhr.send(formData);
    });
  }
}
