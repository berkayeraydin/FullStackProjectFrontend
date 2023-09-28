import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { sharedReducers } from './shared/store/shared.reducers';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapBasket } from '@ng-icons/bootstrap-icons';
import { SocketIoModule } from 'ngx-socket-io';
@NgModule({
  declarations: [AppComponent],
  // Import ettiğim modüllerden sadece o modülün export ettiği alanları kullanabilirim.
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'tr',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient: HttpClient) => {
          return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
        },
        deps: [HttpClient],
      },
    }),
    ToastrModule.forRoot(),
    StoreModule.forRoot(sharedReducers),
    StoreDevtoolsModule.instrument({ maxAge: 60 }),
    SocketIoModule.forRoot({
      url: 'http://localhost:9000/',
      options: {},
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
