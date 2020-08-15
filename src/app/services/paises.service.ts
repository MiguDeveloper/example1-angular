import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  urlApi = 'https://restcountries.eu/rest/v2/lang/es';
  urlActualizarUsuario = '';
  constructor(private httpClient: HttpClient) { }

  getPaises() {
    return this.httpClient.get(this.urlApi).pipe(
      map((resp: any[]) => {
        return resp.map((pais) => {
          return { nombre: pais.name, codigo: pais.alpha3Code };
        });
      })
    );
  }
  getPaises2() {
    return this.httpClient.get(this.urlApi).pipe(
      map((resp: any[]) => {
        return resp.map(pais => {
          return { nombre: pais.name, codigo: pais.alpha3Code };
        });
      })
    );
  }
}
