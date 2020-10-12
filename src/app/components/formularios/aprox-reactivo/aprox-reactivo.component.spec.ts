import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AproxReactivoComponent } from './aprox-reactivo.component';

xdescribe('AproxReactivoComponent', () => {
  let component: AproxReactivoComponent;
  let fixture: ComponentFixture<AproxReactivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AproxReactivoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AproxReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
