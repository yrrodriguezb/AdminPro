import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graphics', component: GraphicsComponent },
      { path: 'account-settings', component: AccountSettingsComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
