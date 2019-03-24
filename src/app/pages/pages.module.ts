import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule {}
