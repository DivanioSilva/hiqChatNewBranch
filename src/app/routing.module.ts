
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'dashboard' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'profile/:name', component: ProfileComponent },
	{ path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class RoutingModule { }