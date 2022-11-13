import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule}  from '@angular/common/http';
import { HskTestComponent } from './components/DeveloperCode/hsk-test/hsk-test.component';
import { DashboardComponent } from './components/DeveloperCode/dashboard/dashboard.component';
import { UsersService } from './components/services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HskTestComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
