import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SignalsWorkshopComponent } from './pages/signals-workshop/signals-workshop.component';
import { SignalsFormComponent } from './pages/signals-form/signals-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { hideLayout: true },
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'signals',
    component: SignalsWorkshopComponent,
  },
  {
    path: 'signalforms',
    component: SignalsFormComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
