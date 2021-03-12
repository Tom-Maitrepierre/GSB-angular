import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MedecinsComponent} from './medecins/medecins.component';
import {MedicamentsComponent} from './medicaments/medicaments.component';
import {RapportsComponent} from './rapports/rapports.component';

const routes: Routes = [
    {path:'medecins',component:MedecinsComponent},
    {path:'medicaments',component:MedicamentsComponent},
    {path:'rapports',component:RapportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
