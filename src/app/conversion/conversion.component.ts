import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';
import { Devise } from '../common/data/devise';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  montant: number;
  codeMonnaieSource: string = "EUR";
  codeMonnaieCible: string = "USD";
  resultat: number;
  errorMsg : string = null;
  listeDevises: Devise[]; //or :Array<Devise>

  calculerConversion() {
    this.errorMsg = null;
    this.deviseService.convertir(this.montant, this.codeMonnaieSource, this.codeMonnaieCible)
    .subscribe(
      (montantConvertir : number) => {
        this.resultat = montantConvertir;
      },
      (err) => {console.log(err);
        this.errorMsg = "There is a problem, please try later!!";
      }
    );
  }

  constructor(private deviseService: DeviseService) {
    //this.deviseService is attribute of current class (typescript)
    //since ConversionComponent is decorated by @component, deviseService is auto injected
    deviseService.rechercherDevises()
    .subscribe(
      (devises : Devise[])=> { 
        this.listeDevises = devises;
      },
      (err) => { console.log(err);
      this.errorMsg = "There is a problem, please try later!!";
      }
    );
  }

  ngOnInit() {
    
  }

}
