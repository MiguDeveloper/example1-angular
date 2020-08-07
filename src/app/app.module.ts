import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    MiscelaneosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
