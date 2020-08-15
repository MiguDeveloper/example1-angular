import { Heroe } from './../../models/heroe';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-heroe',
  templateUrl: './grid-heroe.component.html',
  styleUrls: ['./grid-heroe.component.css'],
})
export class GridHeroeComponent implements OnInit {
  @Input() heroes: Heroe[];

  constructor() {}

  ngOnInit(): void {}
}
