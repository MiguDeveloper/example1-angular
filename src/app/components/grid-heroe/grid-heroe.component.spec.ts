import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHeroeComponent } from './grid-heroe.component';

describe('GridHeroeComponent', () => {
  let component: GridHeroeComponent;
  let fixture: ComponentFixture<GridHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
