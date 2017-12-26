import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { AboutComponent } from './about/about.component';
import { FavouriteComponent } from './favourite/favourite.component';


export const routes: Routes = [
    {path: '',redirectTo: 'login',pathMatch: 'full'},
    {path: '',component: FullLayoutComponent,data: {title: 'DASHBOARD'},
        children: [
          {path: 'landing',component: LandingComponent,data: {title: 'Langinding Page'}},          
          {path: 'about',component: AboutComponent,data: {title: 'Langinding Page'}},          
          {path: 'report',component: ReportComponent,data: {title: 'Langinding Page'}},          
          {path: 'dashboard',component: DashboardComponent,data: {title: 'Langinding Page'}},          
          {path: 'favourite',component: FavouriteComponent,data: {title: 'Langinding Page'}}          
      ]
    },
    {path: 'login',component: LoginComponent,data: {title: 'Login Page'}},
    {path: 'logout',component: LogoutComponent,data: {title: 'Log out'}}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]    
})
export class AppRoutingModule { }
