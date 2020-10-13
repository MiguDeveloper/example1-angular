import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-emiter',
  templateUrl: './event-emiter.component.html',
  styles: [],
})
export class EventEmiterComponent implements OnInit {
  hp = 100;
  hpCambia = new EventEmitter<number>();
  formRegister: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  ngOnInit(): void {}

  recibeDanio(danio: number) {
    if (danio >= this.hp) {
      this.hp = 0;
    } else {
      this.hp -= danio;
    }
    this.hpCambia.emit(this.hp);
  }

  crearFormulario() {
    this.formRegister = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
