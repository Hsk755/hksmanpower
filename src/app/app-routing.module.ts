import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/DeveloperCode/dashboard/dashboard.component';
import { HskTestComponent } from './components/DeveloperCode/hsk-test/hsk-test.component';
// import { AuthGuardService } from './store/authguard.guard';

const routes: Routes = [
  { path: 'HskTest', component: HskTestComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: '**', component: HskTestComponent },

];

// const routes: Routes = [
//   {
//     path: 'reg',
//     loadChildren: () => import('./components/registration-page/registration-page.routing.Module').then(m => m.RegistrationRoutingModule)
//   },
//   {
//     path: 'login',
//     loadChildren: () => import('./components/login-page/login-page.routing.module').then(m => m.LoginRoutingModule)
//   },
//   {
//     path: 'home',
//     loadChildren: () => import('./home-page/home-page.routing.module').then(m => m.homeRoutingModule)
//   },
//   {
//     path: 'reser',
//     loadChildren: () => import('./components/reservation-page/reservation-page.routing.module').then(m => m.ReserRoutingModule)
//   },
//   { path: 'reserList', component: ReservationListComponent },
//   { path: 'reserDetails', component: ReservationDetailsComponent },
//   {
//     path: '',
//     redirectTo: '',
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
