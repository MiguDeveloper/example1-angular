import { from, throwError } from 'rxjs';
import { PaisesService } from './../../../../services/paises.service';

import { EspiasComponent } from './espias.component';

describe('EspiasComponent', () => {
  let component: EspiasComponent;
  const servicio = new PaisesService(null);

  beforeEach(() => {
    component = new EspiasComponent(servicio);
  });

  it('Init: debe de cargar los medicos', () => {
    const paises = [
      { nombre: 'Peru', codigo: 'PE' },
      { nombre: 'Brasil', codigo: 'BR' },
      { nombre: 'Venezuela', codigo: 'VE' },
    ];
    spyOn(servicio, 'getPaises').and.callFake(() => from([paises]));

    component.ngOnInit();

    expect(component.medicos.length).toBeGreaterThan(0);
  });

  // verificar que se ejecute un metodo del servicio
  it('Debe llamar al servicio para agregar un pais', () => {
    const espia = spyOn(servicio, 'crearPais').and.callFake((pais) =>
      from([{}])
    );
    component.agregarPais();
    expect(espia).toHaveBeenCalled();
  });

  it('Debe de agregar un nuevo pais al arreglo de paises', () => {
    const pais = { nombre: 'Peru', codigo: 'PE' };
    spyOn(servicio, 'crearPais').and.returnValue(from([pais]));
    component.agregarPais();
    expect(component.medicos.indexOf(pais)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla agregar paises la propiedad mensajeError debe ser igual a Error en el servicio', () => {
    const miError = 'No se pudo agregar el medico';
    spyOn(servicio, 'crearPais').and.returnValue(throwError(miError));
    component.agregarPais();
    expect(component.mensajeError).toBe(miError);
  });

  it('Debe de llamar al servicio para eliminar a un pais', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(servicio, 'borrarPais').and.returnValue(from([{}]));
    component.borrarPais('1');
    expect(espia).toHaveBeenCalledWith('1');
  });
  it('No debe de llamar al servicio para eliminar a un pais', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(servicio, 'borrarPais').and.returnValue(from([{}]));
    component.borrarPais('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
