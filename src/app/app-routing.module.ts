import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { UserListComponent } from './features/users/user-list/user-list.component';
import { UserDetailComponent } from './features/users/user-detail/user-detail.component';
import { UserEditComponent } from './features/users/user-edit/user-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserDetailComponent, canActivate: [AuthGuard] },
  { path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }