import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringComponent } from './string.component';

describe('Pruebas basicas StringComponent: string, numbers', () => {
  let component: StringComponent;
  let fixture: ComponentFixture<StringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StringComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('String: Devuelve un string', () => {
    expect(typeof component.mensaje('miguel')).toBe('string');
  });

  it('String: Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Miguel';
    expect(component.mensaje(nombre)).toContain(nombre);
  });

  it('Numeros: debe retornar 100 si numero es mayor a 100', () => {
    const resp = component.incrementar(300);
    expect(resp).toBe(100);
  });

  it('Numeros: debe incrementar numero en 1 si numero es menor a 100', () => {
    const resp = component.incrementar(50);
    expect(resp).toBe(51);
  });

  it('Booleanos: usuario logeado debe retornar true', () => {
    const resp = component.usuarioLogeado();
    expect(resp).toBeTruthy();
  });

  it('Arrays: debe retornar al menos 3 robots', () => {
    const resp = component.obtenerRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it('Arrays: debe contener MegaMan y Ultron', () => {
    const resp = component.obtenerRobots();
    expect(resp).toContain('MegaMan');
    expect(resp).toContain('Ultron');
  });

  it('Clases: debe retornar 80 si recibe 20 de danio', () => {
    const resp = component.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('Clases: debe retornar 50 si recibe 50 de danio', () => {
    const resp = component.recibeDanio(50);
    expect(resp).toBe(50);
  });

  it('Clases: debe retornar 0 si recibe mas de 100 de danio', () => {
    const resp = component.recibeDanio(200);
    expect(resp).toBe(0);
  });
});
