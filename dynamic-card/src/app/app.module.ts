import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
