import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HackathonsPageRoutingModule } from './hackathons-routing.module';

import { HackathonsPage } from './hackathons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HackathonsPageRoutingModule
  ],
  declarations: [HackathonsPage]
})
export class HackathonsPageModule {}
