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
import { AppointmentItemComponent } from './components/appointment-item/appointment-item.component';
import { NewPatientComponent } from './pages/new-patient/new-patient.component';
import { InputItemComponent } from './components/input-item/input-item.component';
import { InputItemSearchComponent } from './components/input-item-search/input-item-search.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DashboardContentWrapperComponent } from './components/dashboard-content-wrapper/dashboard-content-wrapper.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './pages/edit-appointment/edit-appointment.component';
import { InputItemFileComponent } from './components/input-item-file/input-item-file.component';
import { InputItemSearchListComponent } from './components/input-item-search-list/input-item-search-list.component';
import { PatientSnapshotComponent } from './pages/patient-snapshot/patient-snapshot.component';
import { PatientViewComponent } from './pages/patient-view/patient-view.component';
import { AppointmentSnapshotComponent } from './pages/appointment-snapshot/appointment-snapshot.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { LanguagePreferenceComponent } from './pages/language-preference/language-preference.component';
import { LineChartComponent } from './components/chart/line-chart/line-chart.component';
import { BarChartComponent } from './components/chart/bar-chart/bar-chart.component';
import { MiniChartComponent } from './components/chart/mini-chart/mini-chart.component';

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
    AppointmentItemComponent,
    NewPatientComponent,
    InputItemComponent,
    InputItemSearchComponent,
    SettingsComponent,
    DashboardContentWrapperComponent,
    AddAppointmentComponent,
    EditAppointmentComponent,
    InputItemFileComponent,
    InputItemSearchListComponent,
    PatientSnapshotComponent,
    PatientViewComponent,
    AppointmentSnapshotComponent,
    BackgroundImageComponent,
    AnalyticsComponent,
    AdminProfileComponent,
    LanguagePreferenceComponent,
    LineChartComponent,
    BarChartComponent,
    MiniChartComponent
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
