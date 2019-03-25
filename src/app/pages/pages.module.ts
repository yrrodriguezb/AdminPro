import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { GraphDoughnutComponent } from '../components/graph-doughnut/graph-doughnut.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent,
    GraphDoughnutComponent,
    IncrementadorComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent
  ],
  imports: [
    FormsModule,
    ChartsModule,
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule {}
