import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'about',
  //   loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  // },
  {
    path: 'partners',
    loadChildren: () => import('./pages/partners/partners.module').then( m => m.PartnersPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./pages/partnerwithus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'digitalcitizen',
    loadChildren: () => import('./pages/digitalcitizen/digitalcitizen.module').then( m => m.DigitalcitizenPageModule)
  },
  {
    path: 'hackathons',
    loadChildren: () => import('./pages/hackathons/hackathons.module').then( m => m.HackathonsPageModule)
  },
  {
    path: 'incubator',
    loadChildren: () => import('./pages/incubator/incubator.module').then( m => m.IncubatorPageModule)
  },
  {
    path: 'innovation',
    loadChildren: () => import('./pages/innovation/innovation.module').then( m => m.InnovationPageModule)
  },
  {
    path: 'hackathonregistration',
    loadChildren: () => import('./pages/hackathonregistration/hackathonregistration.module').then( m => m.HackathonregistrationPageModule)
  },
  {
    path: 'sponsor',
    loadChildren: () => import('./pages/sponsor/sponsor.module').then( m => m.SponsorPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then( m => m.VideosPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
