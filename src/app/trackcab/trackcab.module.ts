import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrackcabPageRoutingModule } from './trackcab-routing.module';

import { TrackcabPage } from './trackcab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrackcabPageRoutingModule
  ],
  declarations: [TrackcabPage]
})
export class TrackcabPageModule {}
