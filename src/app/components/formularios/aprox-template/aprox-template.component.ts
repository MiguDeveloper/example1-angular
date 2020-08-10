import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-aprox-template",
  templateUrl: "./aprox-template.component.html",
  styleUrls: ["./aprox-template.component.css"],
})
export class AproxTemplateComponent implements OnInit {
  usuario = {
    nombre: 'Miguel'
  }
  constructor() {}

  ngOnInit(): void {}

  guardar(forma: NgForm) {
    console.log(forma.value);
  }
}
