import { environment } from './../../environments/environment.prod';
import { UsuariosResp } from './../models/usuarioResp';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = environment.urlApiExterna;

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  urlGetUsuarios = `${baseUrl}/users`;
  constructor(private httpClient: HttpClient) {}

  obtenerUsuarios(): Observable<UsuariosResp> {
    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'miguel');

    // crearemos un interceptor para agregar el token en todas la API
    // const headers = new HttpHeaders({ 'x-token': 'kdnekdnekdnkedn' });
    return this.httpClient.get<UsuariosResp>(this.urlGetUsuarios, {
      params,
    });
  }
}
