import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material.Module';
import { LoanComponent } from './loan/loan.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { NewLoanComponent } from './loan/new-loan/new-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    LoanComponent,
    HeaderComponent,
    SidenavComponent,
    NewLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
