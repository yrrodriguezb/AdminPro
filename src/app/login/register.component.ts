import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService } from 'ngx-alerts';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';


declare function init_plugins(): any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private alertService: AlertService,
    public usuarioService: UsuarioService,
    public router: Router
    ) { }

  ngOnInit() {
    init_plugins();
    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false, Validators.required)
    }, {
      validators: this.validarPassword('password', 'password2')
    });
  }

  validarPassword(password: string, password2: string) {
    return (group: FormGroup) => {

      const pw1 = group.controls[password].value;
      const pw2 = group.controls[password2].value;

      if (pw1 === pw2) {
        return null;
      }

      return {
        sonIguales: true
      };
    };
  }

  registrarUsuario() {
    if (this.form.invalid) {
      this.alertService.danger('Por favor verificar los datos suministrados en el formulario.');
      return;
    }
    if (!this.form.value.condiciones) {
      this.alertService.warning('Debe aceptar los terminos y condiciones.');
      return;
    }

    const usuario = new Usuario(
      this.form.value.nombre,
      this.form.value.correo,
      this.form.value.password
    );

    this.usuarioService.postUsuario(usuario)
      .subscribe((data: any) => {
        if (data) {
          this.router.navigate(['/login']);
        } else {
          this.alertService.danger('Error al intentar registarse');
        }
      });
  }

}
