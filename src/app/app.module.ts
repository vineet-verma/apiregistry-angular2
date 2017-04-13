import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './app.component';
import { ApisComponent } from './components/apisgroup.component';
import { ApiDetailsComponent } from './components/apiDetails.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import {routes} from './app.router';
@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,Angular2FontawesomeModule,routes ],
  declarations: [ AppComponent,ApisComponent,ApiDetailsComponent ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
