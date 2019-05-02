import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { GOOGLE_CLIENT_ID } from '../secrets/secrets';


declare function init_plugins(): any;
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string;

  auth2: any;

  constructor(
    public router: Router,
    public usuarioService: UsuarioService
    ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.asignarEmail();
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: GOOGLE_CLIENT_ID,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      let btnGoogle = document.getElementById('btnGoogle');
      this.attachSignIn(btnGoogle);
    });
  }

  attachSignIn(element) {
    this.auth2.attachClickHandler(element, {}, googleUser => {
      // let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;

      this.usuarioService.loginGoogle(token).subscribe(() => {
        // this.router.navigate(['/dashboard']);
        window.location.href = '/#/dashboard';
      });
    });
  }

  ingresar( form: NgForm ) {
    if (form.invalid) {
      return;
    }

    const usuario = new Usuario(null, form.value.email, form.value.password);

    this.usuarioService.login(usuario, form.value.recuerdame).subscribe(data => {
      this.router.navigate(['/dashboard']);
    });
  }

  asignarEmail() {
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

}
