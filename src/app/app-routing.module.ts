import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DemoComponent } from './demo.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
 
const routes: Routes = [
      {
        path: 'heroes',
        component: HeroesComponent
      },{
        path: 'heroes/:id',
        component: HeroDetailComponent
      },{
        path: 'dashboard',
        component: DashboardComponent
      },{
        path: 'demo',
        component: DemoComponent
      },{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}