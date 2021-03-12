import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { RapportsComponent } from './rapports/rapports.component';
import { AuthentificationComponent } from './authentification/authentification.component';


@NgModule({
  declarations: [
    AppComponent,
    MedecinsComponent,
    MedicamentsComponent,
    RapportsComponent,
    AuthentificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
