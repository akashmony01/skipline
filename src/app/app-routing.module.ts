import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorsViewComponent } from './pages/doctors-view/doctors-view.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './pages/edit-appointment/edit-appointment.component';
import { PatientSnapshotComponent } from './pages/patient-snapshot/patient-snapshot.component';
import { PatientViewComponent } from './pages/patient-view/patient-view.component';
import { AppointmentSnapshotComponent } from './pages/appointment-snapshot/appointment-snapshot.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { LanguagePreferenceComponent } from './pages/language-preference/language-preference.component';
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      }
    ]
  },
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
        children : [
          {
            path: '',
            pathMatch: 'full',
            component: SettingsComponent
          },
          {
            path: 'admin-profile',
            component: AdminProfileComponent
          },
          {
            path: 'language-preference',
            component: LanguagePreferenceComponent
          },
        ]
      },
      {
        path: 'add-appointment',
        component: AddAppointmentComponent
      },
      {
        path: 'edit-appointment',
        component: EditAppointmentComponent
      },
      {
        path: 'appointment-snapshot',
        component: AppointmentSnapshotComponent
      },
      {
        path: 'patient-snapshot',
        component: PatientSnapshotComponent
      },
      {
        path: 'patient-view',
        component: PatientViewComponent
      },
      {
        path: 'analytics',
        component: AnalyticsComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
