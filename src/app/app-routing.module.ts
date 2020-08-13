import { DragableComponent } from "./components/dragable/dragable.component";
import { ScrollComponent } from "./components/scroll/scroll.component";
import { BarraComponent } from "./components/graficos/barra/barra.component";
import { AproxReactivoComponent } from "./components/formularios/aprox-reactivo/aprox-reactivo.component";
import { AproxTemplateComponent } from "./components/formularios/aprox-template/aprox-template.component";
import { FormulariosComponent } from "./components/formularios/formularios.component";
import { UsuarioEditarComponent } from "./components/usuario/usuario-editar/usuario-editar.component";
import { UsuarioDetalleComponent } from "./components/usuario/usuario-detalle/usuario-detalle.component";
import { UsuarioNuevoComponent } from "./components/usuario/usuario-nuevo/usuario-nuevo.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";
import { MiscelaneosComponent } from "./components/miscelaneos/miscelaneos.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { BusquedaHeroeComponent } from "./components/busqueda-heroe/busqueda-heroe.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { DirectivasEstructuralesComponent } from "./components/directivas-estructurales/directivas-estructurales.component";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LineaComponent } from "./components/graficos/linea/linea.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "directivas-estructurales",
    component: DirectivasEstructuralesComponent,
  },
  { path: "heroes", component: HeroesComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "search/:termino", component: BusquedaHeroeComponent },
  { path: "pipes", component: PipesComponent },
  { path: "miscelaneos", component: MiscelaneosComponent },
  {
    path: "usuario/:id",
    component: UsuarioComponent,
    children: [
      { path: "nuevo", component: UsuarioNuevoComponent },
      { path: "detalle", component: UsuarioDetalleComponent },
      { path: "editar", component: UsuarioEditarComponent },
      { path: "**", pathMatch: "full", redirectTo: "nuevo" },
    ],
  },
  {
    path: "formularios",
    component: FormulariosComponent,
    children: [
      { path: "aprox-template", component: AproxTemplateComponent },
      { path: "aprox-reactivo", component: AproxReactivoComponent },
      { path: "**", pathMatch: "full", redirectTo: "aprox-template" },
    ],
  },
  { path: "grafico-linea", component: LineaComponent },
  { path: "grafico-barra", component: BarraComponent },
  { path: "scroll-virtual", component: ScrollComponent },
  { path: "drag-and-drop", component: DragableComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
