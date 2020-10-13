import { PaisesService } from './../../../../services/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-espias',
  templateUrl: './espias.component.html',
  styles: [],
})
export class EspiasComponent implements OnInit {
  medicos: any[] = [];
  mensajeError: string;

  constructor(private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.paisesService.getPaises().subscribe((rpta) => (this.medicos = rpta));
  }

  agregarPais() {
    const pais = { nombre: 'Venezuela', codigo: 'VE' };

    this.paisesService.crearPais(pais).subscribe(
      (medicoDB) => this.medicos.push(medicoDB),
      (err) => (this.mensajeError = err)
    );
  }

  borrarPais(id: string) {
    const confirmar = confirm('estas seguro que deseas eliminar un pais');
    if (confirmar) {
      this.paisesService.borrarPais(id);
    }
  }
}
