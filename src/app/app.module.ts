import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Input1Component } from './components/input1/input1.component';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { ShowgroupsComponent } from './components/showgroups/showgroups.component';
import { PowerRangerComponent } from './components/power-ranger/power-ranger.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { SpinnerModule } from 'primeng/spinner';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    Input1Component,
    Form1Component,
    Form2Component,
    ShowgroupsComponent,
    PowerRangerComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SpinnerModule,
    InputTextModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
