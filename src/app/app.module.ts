import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SharedComponent } from './components/shared/shared.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BotonComponent } from './components/boton/boton.component';
import { IconCheckComponent } from './components/icon-check/icon-check.component';
import { BtnClearComponent } from './components/btn-clear/btn-clear.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    BotonComponent,
    IconCheckComponent,
    BtnClearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
