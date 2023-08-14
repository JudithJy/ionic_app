import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InnovationPage } from './innovation.page';

const routes: Routes = [
  {
    path: '',
    component: InnovationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InnovationPageRoutingModule {}
