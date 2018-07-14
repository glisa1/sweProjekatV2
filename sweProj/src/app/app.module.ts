import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogInComponentComponent } from './Components/log-in-component/log-in-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
