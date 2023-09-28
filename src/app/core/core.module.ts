import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayLoadingComponent } from './components/overlay-loading/overlay-loading.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { LoadingService } from './services/loading.service';

@NgModule({
  declarations: [OverlayLoadingComponent],
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
  ],
  exports: [OverlayLoadingComponent],
})
export class CoreModule {}
