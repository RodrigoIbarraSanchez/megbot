import {ModuleWithProviders} from '@angular/core';
import  {Routes, RouterModule} from '@angular/router';
import {ClasesComponent} from './clases/clases.component';
import {DashboardComponent} from './dashboard/dashboard.component'


const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },

  {
    path: 'horario',
    component: ClasesComponent
  }
]

export  const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
