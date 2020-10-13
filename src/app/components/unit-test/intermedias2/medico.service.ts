import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  constructor(private httpCliente: HttpClient) {}

  getMedico() {
    return this.httpCliente.get('...');
  }
}
