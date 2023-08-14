import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InnovationPageRoutingModule } from './innovation-routing.module';

import { InnovationPage } from './innovation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InnovationPageRoutingModule
  ],
  declarations: [InnovationPage]
})
export class InnovationPageModule {}
