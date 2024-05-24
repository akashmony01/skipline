import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NotifItemComponent } from './components/notif-item/notif-item.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DoctorsViewComponent } from './pages/doctors-view/doctors-view.component';
import { DashboardHeaderDefaultComponent } from './components/dashboard-header-default/dashboard-header-default.component';
import { PatientItemComponent } from './components/patient-item/patient-item.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { InputItemComponent } from './components/input-item/input-item.component';
import { InputItemSearchComponent } from './components/input-item-search/input-item-search.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardContentWrapperComponent } from './components/dashboard-content-wrapper/dashboard-content-wrapper.component';
import { AddPointmentComponent } from './pages/add-pointment/add-pointment.component';
import { EditAppointmentComponent } from './pages/edit-appointment/edit-appointment.component';
import { InputItemFileComponent } from './components/input-item-file/input-item-file.component';
import { InputItemSearchListComponent } from './components/input-item-search-list/input-item-search-list.component';
import { PatientSnapshotComponent } from './pages/patient-snapshot/patient-snapshot.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    MainLayoutComponent,
    SidebarComponent,
    NotifItemComponent,
    DashboardHeaderComponent,
    DoctorsViewComponent,
    DashboardHeaderDefaultComponent,
    PatientItemComponent,
    NewPatientComponent,
    InputItemComponent,
    InputItemSearchComponent,
    SettingsComponent,
    DashboardContentWrapperComponent,
    AddPointmentComponent,
    EditAppointmentComponent,
    InputItemFileComponent,
    InputItemSearchListComponent,
    PatientSnapshotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
