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
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
