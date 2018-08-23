import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';
import { HttpModule } from '@angular/http';
import {HeroService} from './hero.service';


import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { AddOrUpdateTodoComponent } from './add-or-update-todo/add-or-update-todo.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
  {path : '',component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddOrUpdateTodoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
