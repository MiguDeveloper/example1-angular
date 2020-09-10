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

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  crearFormulario() {
    this.formulario = this.fb.group({
      name: ['', Validators.required],
      date: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      text: ['', Validators.minLength(50)],
      category: ['', Validators.required],
      gender: ['', Validators.required],
    });

    this.formulario
      .get('name')
      .valueChanges.subscribe((value) => console.log(value));
  }
}
