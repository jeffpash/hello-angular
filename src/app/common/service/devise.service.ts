import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  constructor(private http: HttpClient) {}

  
  public rechercherDevises(): Observable<Devise[]> {
    // return of(this.tabDevise);
    let url = "./devise-api/public/devise";
    return this.http.get<Devise[]>(url);
   }

   public deleteDevise(codeDevise : string) : Observable<any>{
     let url = `./devise-api/private/role_admin/devise/${codeDevise}`;
     return this.http.delete(url);
   }
  

  //before http request
  private tabDevise: Devise[] = [
    new Devise("USD", "Dollar", 1),
    new Devise("EUR", "Euro", 0.9),
    new Devise("GDB", "Livre", 0.8),
    new Devise("JPY", "Yen", 120)
    //0.9 euro pour 1 dollar
  ];

  public convertir(
    montant: number,
    codeMonnaieSource: string,
    codeMonnaieCible: string): Observable<number> {
    //let res = 1;
    let url =`
    ./devise-api/public/convert?source=${codeMonnaieSource}&target=${codeMonnaieCible}&amount=${montant}
    `;
    return this.http.get<object>(url)
    .pipe(
      map((responseObject) => {return responseObject["result"];})
    );
    // //code temp sans http
    // let deviseCible = null;
    // let deviseSource = null;
    // for (let d of this.tabDevise) {
    //   if (d.code == codeMonnaieSource)
    //     deviseSource = d;
    //   if (d.code==codeMonnaieCible)
    //     deviseCible= d;
    // }
    // res = montant * deviseCible.change / deviseSource.change;
    // return of(res);
  }

}
