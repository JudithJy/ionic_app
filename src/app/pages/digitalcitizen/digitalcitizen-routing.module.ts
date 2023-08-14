import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitalcitizenPage } from './digitalcitizen.page';

const routes: Routes = [
  {
    path: '',
    component: DigitalcitizenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitalcitizenPageRoutingModule {}
