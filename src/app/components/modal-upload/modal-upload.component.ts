import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { UploadFileService } from 'src/app/services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  imagenSubir: File;
  imagenTemp: string | ArrayBuffer;


  constructor(
    public alertService: AlertService,
    public uploFileService: UploadFileService,
    public modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
  }

  seleccionImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
      this.alertService.danger('El archivo no es de tipo "Imagen"');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result;
  }

  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;
    this.modalUploadService.ocultarModal();
  }

  subirImagen() {
    this.uploFileService.subirArchivo(this.imagenSubir, this.modalUploadService.tipo, this.modalUploadService.id).then(res => {
      console.log(res);
      this.modalUploadService.notificacion.emit(res);
      this.cerrarModal();
    }).catch(err => {
      this.alertService.danger('Error al intentar subir el archivo');
      console.log(err);
    });
  }

}
