import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivoFullComponent } from './reactivo-full.component';

describe('ReactivoFullComponent', () => {
  let component: ReactivoFullComponent;
  let fixture: ComponentFixture<ReactivoFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactivoFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivoFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
