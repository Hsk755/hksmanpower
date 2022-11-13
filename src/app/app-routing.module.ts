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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
