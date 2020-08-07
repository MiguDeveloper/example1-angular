import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-miscelaneos",
  templateUrl: "./miscelaneos.component.html",
  styleUrls: ["./miscelaneos.component.css"],
})
export class MiscelaneosComponent implements OnInit {
  tamanioFont = 20;
  alerta = "alert-secondary";
  propiedades = {
    tipoDanger: true,
  };
  loading = false;

  constructor() {}

  ngOnInit(): void {}

  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }
}
