import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    ErrorMessageComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent,
    ErrorMessageComponent,
    FilterPipe
  ]
})
export class SharedModule { }