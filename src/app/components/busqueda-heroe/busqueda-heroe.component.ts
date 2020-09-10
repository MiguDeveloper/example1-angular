import { ActivatedRoute } from '@angular/router';
import { Heroe } from './../../models/heroe';
import { Component, OnInit } from '@angular/core';
import { HeroeService } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css'],
})
export class BusquedaHeroeComponent implements OnInit {
  heroes: Heroe[] = [];
  termino = '';

  constructor(
    private heroesService: HeroeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroe(this.termino);
    });
  }
}
