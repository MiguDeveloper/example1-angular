import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactivo-full',
  templateUrl: './reactivo-full.component.html',
  styleUrls: ['./reactivo-full.component.css'],
})
export class ReactivoFullComponent implements OnInit {
  formulario: FormGroup;
  categorias = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  genders = [
    { id: 'f', description: 'Female' },
    { id: 'm', description: 'Male' },
  ];

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(20)]],
      category: ['', Validators.required],
      gender: ['', Validators.required],
    });

    this.formulario
      .get('name')
      .valueChanges.subscribe((value) => console.log(value));
  }

  guardar() {
    if (this.formulario.valid) {
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  get emailField() {
    return this.formulario.get('email');
  }

  get textField() {
    return this.formulario.get('text');
  }

  get genderField() {
    return this.formulario.get('gender');
  }
}
