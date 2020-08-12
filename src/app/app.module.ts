import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { DirectivasEstructuralesComponent } from "./components/directivas-estructurales/directivas-estructurales.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { GridHeroeComponent } from "./components/grid-heroe/grid-heroe.component";
import { BusquedaHeroeComponent } from "./components/busqueda-heroe/busqueda-heroe.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { CapitalizadoPipe } from "./pipes/capitalizado.pipe";
import { ContraseniaPipe } from "./pipes/contrasenia.pipe";
import { MiscelaneosComponent } from "./components/miscelaneos/miscelaneos.component";
import { ResaltadoDirective } from "./directives/resaltado.directive";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { UsuarioNuevoComponent } from "./components/usuario/usuario-nuevo/usuario-nuevo.component";
import { UsuarioEditarComponent } from "./components/usuario/usuario-editar/usuario-editar.component";
import { UsuarioDetalleComponent } from "./components/usuario/usuario-detalle/usuario-detalle.component";
import { FormulariosComponent } from "./components/formularios/formularios.component";
import { AproxTemplateComponent } from "./components/formularios/aprox-template/aprox-template.component";
import { AproxReactivoComponent } from "./components/formularios/aprox-reactivo/aprox-reactivo.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
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
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
