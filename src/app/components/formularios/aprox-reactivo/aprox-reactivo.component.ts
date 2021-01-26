import { ValidadoresService } from './../../../services/validadores.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-aprox-reactivo',
  templateUrl: './aprox-reactivo.component.html',
  styleUrls: ['./aprox-reactivo.component.css'],
})
export class AproxReactivoComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validadores: ValidadoresService
  ) {}

  ngOnInit(): void {
    this.crearFormulario();
    this.cargarDataAlFormulario();
    this.crearListener();
  }

  get pasatiempos() {
    return this.usuarioForm.get('pasatiempos') as FormArray;
  }

  validacionControl(nombreControl: string): boolean {
    return (
      this.usuarioForm.get(nombreControl).invalid &&
      this.usuarioForm.get(nombreControl).touched
    );
  }

  get pass2NoValido() {
    const pwd1 = this.usuarioForm.get('pass1').value;
    const pwd2 = this.usuarioForm.get('pass2').value;
    return pwd1 === pwd2 ? false : true;
  }

  crearFormulario() {
    this.usuarioForm = this.fb.group(
      {
        nombre: ['', [Validators.required, Validators.minLength(5)]],
        apellido: ['', [Validators.required, this.validadores.noHerrera]],
        correo: [
          '',
          [
            Validators.required,
            Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
          ],
        ],
        usuario: ['', Validators.required, this.validadores.exiteUsuario],
        usuario2: [''],
        pass1: ['', [Validators.required, Validators.minLength(5)]],
        pass2: ['', [Validators.required, Validators.minLength(5)]],
        direccion: this.fb.group({
          distrito: ['', Validators.required],
          ciudad: ['', Validators.required],
        }),
        pasatiempos: this.fb.array([]),
      },
      {
        validators: this.validadores.passwordsIguales('pass1', 'pass2'),
      }
    );
  }

  crearListener() {
    this.usuarioForm
      .get('usuario')
      .valueChanges.subscribe((dato) =>
        this.usuarioForm.get('usuario2').setValue(dato)
      );
  }

  guardarForm() {
    if (this.usuarioForm.valid) {
      console.log('Validación correcta');
      this.usuarioForm.reset();
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

  cargarDataAlFormulario() {
    this.usuarioForm.reset({
      nombre: 'Miguel',
      apellido: 'Chinchay',
      correo: 'miguel@gmail.com',
      direccion: {
        distrito: 'Chosica',
        ciudad: 'Lima',
      },
    });

    ['Programar', 'Leer'].forEach((item) =>
      this.pasatiempos.push(this.fb.control(item))
    );
  }

  agregarPasatiempo() {
    this.pasatiempos.push(this.fb.control('', Validators.required));
  }

  borrarPasatiempo(i: number) {
    this.pasatiempos.removeAt(i);
  }
}
