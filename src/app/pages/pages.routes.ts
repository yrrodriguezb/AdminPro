import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';
import { UsuariosComponent } from './usuarios/usuarios.component';


const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [
      LoginGuardGuard
    ],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'DashBoard' } },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Barra de Progreso' } },
      { path: 'graphics', component: GraphicsComponent, data: { titulo: 'Graficas' } },
      { path: 'promises', component: PromesasComponent, data: { titulo: 'Promesas' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Condifuración' } },
      { path: 'profile', component: ProfileComponent, data: { titulo: 'Perfil de usuario' } },
      { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXjs' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
