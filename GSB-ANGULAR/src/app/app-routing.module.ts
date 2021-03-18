import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MedecinsComponent} from './medecins/medecins.component';
import {MedicamentsComponent} from './medicaments/medicaments.component';
import {RapportsComponent} from './rapports/rapports.component';
import {ModifierRapportsComponent} from './rapports/modifier-rapports/modifier-rapports.component';
import {CreerRapportsComponent} from './rapports/creer-rapports/creer-rapports.component';

const routes: Routes = [
    {path:'medecins',component:MedecinsComponent},
    {path:'medicaments',component:MedicamentsComponent},
    {path:'rapports',component:RapportsComponent},
    {path:'rapports-modifier',component:ModifierRapportsComponent},
    {path:'rapports-creer',component:CreerRapportsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
