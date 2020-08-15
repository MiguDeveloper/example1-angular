import { Component, OnInit, OnDestroy, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-miscelaneos',
  templateUrl: './miscelaneos.component.html',
  styleUrls: ['./miscelaneos.component.css'],
})
export class MiscelaneosComponent implements OnInit, OnDestroy{
  tamanioFont = 20;
  alerta = 'alert-secondary';
  propiedades = {
    tipoDanger: true,
  };
  loading = false;
  tipoAlerta = 'success';
  usuario: string;

  constructor() { }

  ngOnInit(): void {
    console.log('Ejecuto ngOnInit');
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }

  ngOnDestroy() {
    console.log('ejecuto ngOnDestroy');
  }

}
