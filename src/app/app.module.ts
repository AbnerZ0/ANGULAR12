import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BarComponent } from './bar/bar.component';
import { CartaComponent } from './carta/carta.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarComponent,
    CartaComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
