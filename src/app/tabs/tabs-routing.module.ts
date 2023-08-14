import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage, 
    children:[
      {
        path: 'home',
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
          } 
        ]
      },
      {
        path: 'about',
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/about/about.module').then( m => m.AboutPageModule)
          } 
        ]
      },
      {
        path: 'events',
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/events/events.module').then( m => m.EventsPageModule)
          } 
        ]
      },
      {
        path: 'hackathons',
        children:[
          {
            path: '',
            loadChildren: () => import('../pages/hackathons/hackathons.module').then( m => m.HackathonsPageModule)
          } 
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
