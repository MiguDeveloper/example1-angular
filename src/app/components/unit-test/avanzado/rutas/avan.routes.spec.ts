import { HeroeComponent } from './../../../heroe/heroe.component';
import { rutas } from './avan.routes';

describe('Rutas principales', () => {
  it('debe escribir la ruta heroe/:id', () => {
    expect(rutas).toContain({ path: 'heroe/:id', component: HeroeComponent });
  });
});
