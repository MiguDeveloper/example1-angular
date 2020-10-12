import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivasEstructuralesComponent } from './components/directivas-estructurales/directivas-estructurales.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { GridHeroeComponent } from './components/grid-heroe/grid-heroe.component';
import { BusquedaHeroeComponent } from './components/busqueda-heroe/busqueda-heroe.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { ContraseniaPipe } from './pipes/contrasenia.pipe';
import { MiscelaneosComponent } from './components/miscelaneos/miscelaneos.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle/usuario-detalle.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { AproxTemplateComponent } from './components/formularios/aprox-template/aprox-template.component';
import { AproxReactivoComponent } from './components/formularios/aprox-reactivo/aprox-reactivo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { LineaComponent } from './components/graficos/linea/linea.component';
import { BarraComponent } from './components/graficos/barra/barra.component';
import { ScrollComponent } from './components/scroll/scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragableComponent } from './components/dragable/dragable.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactivoFullComponent } from './components/formularios/reactivo-full/reactivo-full.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { InterceptoresComponent } from './components/interceptores/interceptores.component';

registerLocaleData(localeES, 'es');

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DirectivasEstructuralesComponent,
    HeroesComponent,
    HeroeComponent,
    GridHeroeComponent,
    BusquedaHeroeComponent,
    PipesComponent,
    CapitalizadoPipe,
    ContraseniaPipe,
    MiscelaneosComponent,
    ResaltadoDirective,
    UsuarioComponent,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent,
    FormulariosComponent,
    AproxTemplateComponent,
    AproxReactivoComponent,
    LineaComponent,
    BarraComponent,
    ScrollComponent,
    DragableComponent,
    ReactivoFullComponent,
    InterceptoresComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    ScrollingModule,
    DragDropModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
