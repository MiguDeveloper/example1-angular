import { EMPTY, from, Observable, Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioComponent } from './usuario.component';

class FakeRouter {
  navigate(parameters) {}
}

class FakeActivatedRoute {
  params: Observable<any> = from([{ id: 'nuevo' }]);
}

describe('Usuario Component: test enrutadores', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar a usuario cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.guardarUsuario();
    expect(spy).toHaveBeenCalledWith(['usuario', '11']);
  });

  it('Debe de colocar el id = nuevo', () => {
    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRoute = TestBed.inject(ActivatedRoute);
    expect(component.id).toBe('nuevo');
  });
});
