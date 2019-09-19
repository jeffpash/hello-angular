import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  //before http request
  private tabDevise: Devise[] = [
    new Devise("USD", "Dollar", 1),
    new Devise("EUR", "Euro", 0.9),
    new Devise("GDB", "Livre", 0.8),
    new Devise("JPY", "Yen", 120)
    //0.9 euro pour 1 dollar
  ];

  public rechercherDevises(): Observable<Devise[]> {
    return of(this.tabDevise);
  }

  public convertir(
    montant: number,
    codeMonnaieSource: string,
    codeMonnaieCible: string): Observable<number> {
    let res = 1;
    //code temp sans http
    let deviseCible = null;
    let deviseSource = null;
    for (let d of this.tabDevise) {
      if (d.code == codeMonnaieSource)
        deviseSource = d;
      if (d.code==codeMonnaieCible)
        deviseCible= d;
    }
    res = montant * deviseCible.change / deviseSource.change;
    return of(res);
  }

  constructor() { }
}
