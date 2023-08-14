import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitalcitizenPageRoutingModule } from './digitalcitizen-routing.module';

import { DigitalcitizenPage } from './digitalcitizen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitalcitizenPageRoutingModule
  ],
  declarations: [DigitalcitizenPage]
})
export class DigitalcitizenPageModule {}
