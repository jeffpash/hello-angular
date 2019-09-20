import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';
import { Devise } from '../common/data/devise';

@Component({
  selector: 'app-admin-devise',
  templateUrl: './admin-devise.component.html',
  styleUrls: ['./admin-devise.component.css']
})
export class AdminDeviseComponent implements OnInit {

  devises : Devise[];
  selectedDevise : Devise = null;
  message : string = "";

  onSupprimer(){
    this.message="";
    if(this.deviseService==null) return;
      this.deviseService.deleteDevise(this.selectedDevise.code)
      .subscribe(
        () => {
          this.message = `${this.selectedDevise.code} deleted`;
          this.ngOnInit();//for refreshing the page
          this.selectedDevise=null;
        },
        (err) => {
          this.message=err.message;
        }
      );
  }

  constructor(private deviseService : DeviseService) { }

  ngOnInit() {
    this.deviseService.rechercherDevises()
    .subscribe(
      (listeDevises) => {
        this.devises = listeDevises;
      },
      (err) => {
        this.message=err.message;
      }
    );
  }

}
