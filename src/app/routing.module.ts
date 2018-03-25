
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
import { AuthGuard } from "./shared/auth.guard";
import { LoginComponent } from './auth/login.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'dashboard', canActivate: [ AuthGuard ]},
	{ path: 'login', pathMatch: 'full', component: LoginComponent},
	{ path: 'dashboard', component: DashboardComponent, canActivate: [ AuthGuard ] },
	{ path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard ] },
	{ path: 'profile/:name', component: ProfileComponent, canActivate: [ AuthGuard ] },
	{ path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class RoutingModule { }