import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { firstComp } from './first-comp.component';
import { child } from './child.component';

@NgModule({
  declarations: [
    AppComponent,
    firstComp,
    child
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
