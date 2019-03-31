import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { titulo: 'DashBoard' } },
      { path: 'progress', component: ProgressComponent, data: { titulo: 'Barra de Progreso' } },
      { path: 'graphics', component: GraphicsComponent, data: { titulo: 'Graficas' } },
      { path: 'promises', component: PromesasComponent, data: { titulo: 'Promesas' } },
      { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Condifuración' } },
      { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXjs' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
