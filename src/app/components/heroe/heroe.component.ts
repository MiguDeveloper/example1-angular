import { HeroeService } from "./../../services/heroe.service";
import { ActivatedRoute } from "@angular/router";
import { Heroe } from "./../../models/heroe";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
  styleUrls: ["./heroe.component.css"],
})
export class HeroeComponent implements OnInit {
  heroes: Heroe[];
  heroe: Heroe;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroeService
  ) {
    this.heroes = heroeService.getHeroes();
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
    });
  }

  ngOnInit(): void {
    this.getHeroe(this.id);
  }

  getHeroe(indice: number) {
    this.heroe = this.heroes.find((heroe) => heroe.id === indice);
  }
}
