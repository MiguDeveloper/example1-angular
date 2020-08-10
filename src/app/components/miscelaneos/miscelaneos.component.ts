import { Component, OnInit, OnDestroy, OnChanges, DoCheck } from "@angular/core";

@Component({
  selector: "app-miscelaneos",
  templateUrl: "./miscelaneos.component.html",
  styleUrls: ["./miscelaneos.component.css"],
})
export class MiscelaneosComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  tamanioFont = 20;
  alerta = "alert-secondary";
  propiedades = {
    tipoDanger: true,
  };
  loading = false;
  tipoAlerta = "success";

  constructor() {}

  ngOnInit(): void {
    console.log("Ejecuto ngOnInit");
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }

  ngOnDestroy() {
    console.log("ejecuto ngOnDestroy");
  }

  ngOnChanges() {
    console.log("ejecuto ngOnChanges");
  }

  ngDoCheck(){
    console.log('Se ejecuto doCheck');
  }
}