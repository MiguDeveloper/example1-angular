import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styles: [],
})
export class StringComponent implements OnInit {
  hp = 100;
  constructor() {}

  ngOnInit(): void {}

  mensaje(nombre: string) {
    return `Saludos ${nombre}`;
  }

  incrementar(numero: number) {
    if (numero > 100) {
      return 100;
    } else {
      return numero + 1;
    }
  }

  usuarioLogeado() {
    return true;
  }

  obtenerRobots() {
    return ['MegaMan', 'Jarvis', 'Robocop', 'Ultron'];
  }

  recibeDanio(danio: number) {
    if (danio >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - danio;
    }

    return this.hp;
  }
}
