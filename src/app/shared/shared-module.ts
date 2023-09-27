import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveInputComponent } from './components/reactive-input/reactive-input.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    HomepageComponent,
    MainLayoutComponent,
    LoginComponent,
    ReactiveInputComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MainLayoutComponent, ReactiveInputComponent], // dış modüllerin kullanabileceği, dışarıya export edilen modüller
})

export class SharedModule { }