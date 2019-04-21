import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(
    private router: Router,
    public usuarioService: UsuarioService) {
  }

  canActivate() {
    if (this.usuarioService.autenticado()) {
      console.log('Autorizado por el Guard');
      return true;
    }

    console.log('Bloqueado por el Guard');
    this.router.navigate(['/login']);
    return false;
  }

}
