import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './modules/dashboard/components/home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {LoginComponent} from './modules/auth/components/login/login.component';
import {LogoutComponent} from './modules/auth/components/logout/logout.component';
import {NotFoundComponent} from './modules/standard/not-found/not-found.component';
import {ForgotPasswordComponent} from './modules/auth/components/forgot-password/forgot-password.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}// TODO make 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
