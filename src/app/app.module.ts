import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { HiComponent } from './components/hi/hi.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Lop1Component } from './components/lop1/lop1.component';
import { Lop2Component } from './components/lop2/lop2.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HiComponent,
    ParentComponent,
    ChildComponent,
    Lop1Component,
    Lop2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
