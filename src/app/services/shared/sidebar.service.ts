import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'DashBoard', url: '/dashboard' },
        { titulo: 'Progress Bar', url: '/progress' },
        { titulo: 'Graficas', url: '/graphics' },
        { titulo: 'Promesas', url: '/promises' },
        { titulo: 'RXjs', url: '/rxjs' }
      ]
    },
    {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' },
        { titulo: 'Hospitales', url: '/hospitales' },
        { titulo: 'Medicos', url: '/medicos' }
      ]
    }
  ];

  constructor() { }
}
