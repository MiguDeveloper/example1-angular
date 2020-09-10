import { HeroeService } from './../../services/heroe.service';
import { Heroes } from './../../models/heroes';
import { Heroe } from './../../models/heroe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[];

  constructor(private heroesService: HeroeService) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }
}
