import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementadorComponent } from './incrementador.component';
import { By } from '@angular/platform-browser';

describe('Incrementador Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Incrementador creado', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de mostrar la leyenda', () => {
    const leyendaTest = 'Progreso de carga';
    component.leyenda = leyendaTest;
    fixture.detectChanges();
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3'))
      .nativeElement;

    expect(elem.innerHTML).toContain(leyendaTest);
  });

  it('Debe de mostrar en el input el valor del progreso', () => {
    component.cambiarValor(5);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const elem: HTMLInputElement = fixture.debugElement.query(By.css('input'))
        .nativeElement;
      expect(elem.value).toBe('55');
    });
  });

  it('Debe de incrementar/decrementar en 5, con un click en el boton', () => {
    const botones = fixture.debugElement.queryAll(By.css('btn-primary'));
    fixture.whenStable().then(() => {
      botones[0].triggerEventHandler('click', null);
      expect(component.progreso).toBe(45);
      botones[1].triggerEventHandler('click', null);
      expect(component.progreso).toBe(50);
    });
  });

  it('Cambio valor de progreso', () => {
    const botones = fixture.debugElement.queryAll(By.css('btn-primary'));
    fixture.whenStable().then(() => {
      botones[0].triggerEventHandler('click', null);
      const elem: HTMLElement = fixture.debugElement.query(By.css('h3'))
        .nativeElement;
      fixture.detectChanges();
      expect(elem.innerHTML).toContain('45');
      botones[0].triggerEventHandler('click', null);
      expect(elem.innerHTML).toContain('40');
      botones[0].triggerEventHandler('click', null);
      expect(elem.innerHTML).toContain('35');
      botones[1].triggerEventHandler('click', null);
      expect(elem.innerHTML).toContain('40');
    });
  });
});
