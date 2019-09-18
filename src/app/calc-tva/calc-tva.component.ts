import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-tva',
  templateUrl: './calc-tva.component.html',
  styleUrls: ['./calc-tva.component.css']
})
export class CalcTVAComponent implements OnInit {

  ht: number;
  taux: number = 20;
  tva: number;
  ttc: number;

  calculer(){
    this.tva = this.ht * this.taux / 100;
    this.ttc = Number(this.ht) + this.tva;
  }

  constructor() { }

  ngOnInit() {
  }

}
