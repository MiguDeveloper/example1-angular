import { HttpClientModule } from '@angular/common/http';
import { MedicoService } from './medico.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';

// el testbed nos sirve para realizar pruebas de integracion
// el fixture nos va a permitir tener acceso al DOM al HTMl poder hacer querys en el DOM
describe('Medico Component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe de crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de retornar el nombre del medico', () => {
    const nombre = 'Miguel';
    const rpta = component.saludarMedico(nombre);
    expect(rpta).toContain(nombre);
  });
});
