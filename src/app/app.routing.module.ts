

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { WorkitemComponent } from './workitem/workitem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const appRoutes: Routes = [
    { path: 'workitem', component: WorkitemComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
      imports: [     
        FormsModule,
        RouterModule.forRoot(
          appRoutes,
          {enableTracing:true}
        )
      ],
      exports:[RouterModule]

})
export class AppRoutingModule { }