import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { RapportsComponent } from './rapports/rapports.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ModifierRapportsComponent } from './rapports/modifier-rapports/modifier-rapports.component';
import { CreerRapportsComponent } from './rapports/creer-rapports/creer-rapports.component';


@NgModule({
  declarations: [
    AppComponent,
    MedecinsComponent,
    MedicamentsComponent,
    RapportsComponent,
    AuthentificationComponent,
    ModifierRapportsComponent,
    CreerRapportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
