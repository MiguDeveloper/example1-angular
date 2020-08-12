import { PaisesService } from "./../../../services/paises.service";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-aprox-template",
  templateUrl: "./aprox-template.component.html",
  styleUrls: ["./aprox-template.component.css"],
})
export class AproxTemplateComponent implements OnInit {
  usuario = {
    nombre: "",
    apellido: "",
    correo: "",
    pais: "",
    sexo: "",
  };
  paises: any[] = [];

  constructor(private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.paisesService.getPaises().subscribe((rpta: any[]) => {
      this.paises = rpta;
      this.paises.unshift({ codigo: "", nombre: "Seleccione un pais" });
    });
  }

  guardar(forma: NgForm) {
    if (forma.valid) {
      console.log(forma.value);
    } else {
      Object.values(forma.controls).forEach((control) =>
        control.markAsTouched()
      );
    }
  }
}
