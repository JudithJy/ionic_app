import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncubatorPageRoutingModule } from './incubator-routing.module';

import { IncubatorPage } from './incubator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncubatorPageRoutingModule
  ],
  declarations: [IncubatorPage]
})
export class IncubatorPageModule {}
