import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomepageComponent, MainLayoutComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TranslateModule
  ],
  exports: [MainLayoutComponent] // dış modüllerin kullanabileceği, dışarıya export edilen moduller
})

export class SharedModule { }