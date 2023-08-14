import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HackathonregistrationPageRoutingModule } from './hackathonregistration-routing.module';

import { HackathonregistrationPage } from './hackathonregistration.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    HackathonregistrationPageRoutingModule
  ],
  declarations: [HackathonregistrationPage]
})
export class HackathonregistrationPageModule {}
