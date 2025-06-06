import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UsersModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class FeaturesModule { }