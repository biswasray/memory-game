import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleplayerComponent } from './games/singleplayer/singleplayer.component';
import { CardComponent } from './games/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleplayerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
