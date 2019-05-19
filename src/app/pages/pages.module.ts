import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { GraphDoughnutComponent } from '../components/graph-doughnut/graph-doughnut.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PAGES_ROUTES } from './pages.routes';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent,
    GraphDoughnutComponent,
    IncrementadorComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    ModalUploadComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraphicsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    SharedModule,
    PAGES_ROUTES,
    PipesModule
  ]
})
export class PagesModule {}
