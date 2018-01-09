import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TooltipComponent }   from './tooltip/tooltip.component';

const appRoutes: Routes = [
  { path: 'tooltip', component: TooltipComponent },
  { path: '',   redirectTo: '/tooltip', pathMatch: 'full' },
  { path: '**', redirectTo: '/tooltip' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}