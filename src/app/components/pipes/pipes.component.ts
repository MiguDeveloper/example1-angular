import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  nombre = 'bill gates';
  nombre2 = 'steve wozniak';
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  personajes = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI = Math.PI;
  porcentaje = 0.234;
  salario = 12345;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20,
    },
  };
  fecha = new Date();
  activar = true;
  constrasenia = 'estaeslacontrasenia';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  constructor() {}

  ngOnInit(): void {}

  inicio = 0;
  handleStep() {
    if (this.personajes.length > 0) {
      const totalElementos = this.personajes.length - 1;
      if (this.inicio < totalElementos) {
        this.inicio++;
      }
    }
  }
}
