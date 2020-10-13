import { FormBuilder } from '@angular/forms';

import { EventEmiterComponent } from './event-emiter.component';

describe('EventEmiterComponent: Emitters, Formularios', () => {
  let component: EventEmiterComponent;

  beforeEach(() => {
    component = new EventEmiterComponent(new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Emite HP de jugador cuando recibe danio', () => {
    let nuevoHp = 0;
    component.hpCambia.subscribe((hp) => (nuevoHp = hp));
    component.recibeDanio(80);
    expect(nuevoHp).toBe(20);
  });

  // Pruebas sobre la existencia de campos email y password
  it('Debe de crear un formulario con campos: email y password', () => {
    expect(component.formRegister.contains('email')).toBeTruthy();
    expect(component.formRegister.contains('password')).toBeTruthy();
  });

  // pruebas sobre las validaciones de campos
  it('Email debe de ser obligatorio', () => {
    const control = component.formRegister.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('Email debe de ser correo valido', () => {
    const control = component.formRegister.get('email');
    control.setValue('correo');
    expect(control.valid).toBeFalsy();
  });

  it('Password debe de ser obligatorio', () => {
    const control = component.formRegister.get('password');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
