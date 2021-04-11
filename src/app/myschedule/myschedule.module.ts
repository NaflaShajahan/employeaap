import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyschedulePageRoutingModule } from './myschedule-routing.module';

import { MyschedulePage } from './myschedule.page';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyschedulePageRoutingModule,
    NgCalendarModule,
    CalendarModule
  ],
  declarations: [MyschedulePage]
})
export class MyschedulePageModule {}
