import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyschedulePage } from './myschedule.page';

const routes: Routes = [
  {
    path: '',
    component: MyschedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyschedulePageRoutingModule {}
