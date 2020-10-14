import { IncrementadorComponent } from './../../intermedias2/incrementador/incrementador.component';
import { HeroeComponent } from './../../../heroe/heroe.component';
import { BusquedaHeroeComponent } from './../../../busqueda-heroe/busqueda-heroe.component';
import { Routes } from '@angular/router';

export const rutas: Routes = [
  { path: 'busqueda', component: BusquedaHeroeComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: '**', component: IncrementadorComponent },
];
