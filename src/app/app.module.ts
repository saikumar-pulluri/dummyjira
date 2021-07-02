import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material/sidenav';
import { IssuesComponent } from './issues/issues.component';
import { SprintComponent } from './sprint/sprint.component';
import { BacklogComponent } from './backlog/backlog.component';





@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    IssuesComponent,
    SprintComponent,
    BacklogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
