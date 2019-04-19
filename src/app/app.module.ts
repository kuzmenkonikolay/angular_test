import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
