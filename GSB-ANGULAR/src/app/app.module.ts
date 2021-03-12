import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { RapportsComponent } from './rapports/rapports.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { WebServiceService } from './web-service.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AfficheMedecinsComponent } from './medecins/affiche-medecins/affiche-medecins.component';

@NgModule({
  declarations: [
    AppComponent,
    MedecinsComponent,
    MedicamentsComponent,
    RapportsComponent,
    AuthentificationComponent,
    AfficheMedecinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WebServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
