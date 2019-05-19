import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';
import { AlertService } from 'ngx-alerts';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public usuarioService: UsuarioService,
    public alertService: AlertService,
    public modalUploadService: ModalUploadService
  ) { }

  ngOnInit() {
    this.cargarUsuarios();
    this.modalUploadService.notificacion.subscribe(res => {
      console.log('Susbscripto al modal upload service');
      this.cargarUsuarios();
    });
  }

  mostarModal(id: string){
    this.modalUploadService.mostrarModal('usuarios', id);
  }

  paginar(valor: number) {
    let desde = this.desde + valor;

    if ((desde >= this.totalRegistros) || (desde < 0) )  {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuarioService.getUsuarios(this.desde).subscribe((data: any) => {
      this.totalRegistros = data.total;
      this.usuarios = data.usuarios;
      this.cargando = false;
    });
  }

  buscarUsuario(termino: string) {
    if (termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }

    this.cargando= true;

    this.usuarioService.buscarUsuarios(termino).subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      this.cargando = false;
    });
  }

  borrarUsuario(usuario: Usuario) {
    if (usuario._id === this.usuarioService.usuario._id) {
      this.alertService.warning('No puede eliminar el usuario');
      return;
    }

    let eliminar = confirm(`Desea continuar eliminando el usuario ${usuario.nombre}`);

    if (eliminar) {
      this.usuarioService.deleteUsuario(usuario._id).subscribe((res: any) => {
        this.cargarUsuarios();
        alert('El usuario se ha eliminado');
      });
    }
  }

  guardarUsuario(usuario: Usuario){
    this.usuarioService.putUsuario(usuario).subscribe();
  }
}
