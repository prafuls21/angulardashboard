import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserMockService } from './services/user-mock.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserMockService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    AuthGuard
  ]
})
export class CoreModule { }