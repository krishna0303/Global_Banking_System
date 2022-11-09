import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcustomerComponent } from './Components/addcustomer/addcustomer.component';
import { FormsModule } from '@angular/forms';
import { DisplayComponentsComponent } from './Components/display-components/display-components.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    DisplayComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
