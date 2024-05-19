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
    PatientItemComponent
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
