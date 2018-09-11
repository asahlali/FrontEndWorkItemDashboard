import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkitemComponent } from './workitem/workitem.component';
import { WorkitemService } from './workitem.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WorkitemComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
   AppRoutingModule
  ],
  providers: [WorkitemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
