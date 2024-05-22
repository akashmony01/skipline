import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorsViewComponent } from './pages/doctors-view/doctors-view.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddPointmentComponent } from './pages/add-pointment/add-pointment.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'doctors-view',
        component: DoctorsViewComponent
      },
      {
        path: 'new-patient',
        component: NewPatientComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'add-appointment',
        component: AddPointmentComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
