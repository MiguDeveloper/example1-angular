import { BusquedaHeroeComponent } from './components/busqueda-heroe/busqueda-heroe.component';
import { GridHeroeComponent } from "./components/grid-heroe/grid-heroe.component";
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
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
