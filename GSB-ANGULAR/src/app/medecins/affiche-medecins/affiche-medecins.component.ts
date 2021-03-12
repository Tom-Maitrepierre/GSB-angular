import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/web-service.service';

@Component({
  selector: 'app-affiche-medecins',
  templateUrl: './affiche-medecins.component.html',
  styleUrls: ['./affiche-medecins.component.css']
})
export class AfficheMedecinsComponent implements OnInit {

  constructor(private service:WebServiceService) { }

  MedecinsList:any=[];

  ngOnInit(): void {
  }

  refreshMedecinsList(){
    this.service.getMedecinsList().subscribe(data=>{
      this.MedecinsList=data;
    });
  }


}
