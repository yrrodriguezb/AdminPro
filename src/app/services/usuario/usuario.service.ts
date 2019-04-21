import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService
  ) {
    this.tokenInit();
  }

  autenticado() {
    return this.token.length > 5 ? true : false;
  }

  private tokenInit() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario =  JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  private localStorageInit(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));
    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('usuario');
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }

  login(usuario: Usuario, recordar: boolean = false) {

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = `${URL_SERVICES}/login/`;
    return this.http.post(url, usuario).pipe(map((data: any) => {
      this.localStorageInit(data.id, data.token, data.usuario);
      return true;
    }));
  }

  loginGoogle(token: string) {
    const url = `${URL_SERVICES}/login/google/`;
    return this.http.post(url, { token } ).pipe(
      map((data: any) => {
        this.localStorageInit(data.id, data.token, data.usuario);
        return true;
      })
    );
  }

  postUsuario(usuario: Usuario) {
    const url = `${URL_SERVICES}/usuarios/`;
    return this.http
      .post(url, usuario).pipe(
        map((res: any) => {
          if (res.ok) {
            this.alertService.success('El usuario se creo correctamente');
          }

          return res.usuario;
        })
      );
  }
}
