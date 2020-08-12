import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ObjectUnsubscribedError } from "rxjs";

@Component({
  selector: "app-aprox-reactivo",
  templateUrl: "./aprox-reactivo.component.html",
  styleUrls: ["./aprox-reactivo.component.css"],
})
export class AproxReactivoComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  validacionControl(nombreControl: string): boolean {
    return (
      this.usuarioForm.get(nombreControl).invalid &&
      this.usuarioForm.get(nombreControl).touched
    );
  }

  iniciarFormulario() {
    this.usuarioForm = this.fb.group({
      nombre: ["", [Validators.required, Validators.minLength(5)]],
      apellido: ["", Validators.required],
      correo: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
        ],
      ],
      direccion: this.fb.group({
        distrito: ["", Validators.required],
        ciudad: ["", Validators.required],
      }),
    });
  }

  guardarForm() {
    if (this.usuarioForm.valid) {
      console.log("Validación correcta");
    } else {
      console.log(this.usuarioForm);
      Object.values(this.usuarioForm.controls).forEach((control) => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach((control) =>
            control.markAsTouched()
          );
        } else {
          control.markAsTouched();
        }
      });
    }
  }
}
