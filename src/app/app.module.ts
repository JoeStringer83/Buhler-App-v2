import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimeComponent } from './header/time/time.component';
import { UserComponent } from './header/user/user.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MachineNavComponent } from './navigation-bar/machine-nav/machine-nav.component';
import { OverviewComponent } from './overview/overview.component';
import { MachineOverviewComponent } from './overview/machine-overview/machine-overview.component';
import { ConnectorsComponent } from './overview/connectors/connectors.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimeComponent,
    UserComponent,
    NavigationBarComponent,
    MachineNavComponent,
    OverviewComponent,
    MachineOverviewComponent,
    ConnectorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
