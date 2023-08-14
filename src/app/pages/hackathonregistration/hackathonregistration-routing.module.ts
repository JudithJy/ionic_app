import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HackathonregistrationPage } from './hackathonregistration.page';

const routes: Routes = [
  {
    path: '',
    component: HackathonregistrationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HackathonregistrationPageRoutingModule {}
