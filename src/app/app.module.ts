import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { HttpClientModule } from '@angular/common/http';

import { NavegacionModule } from './navegacion/navegacion.module';
import { VideojuegosModule } from './videojuegos/videojuegos.module';
import { ProveedoresModule } from './proveedores/proveedores.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NavegacionModule,
    VideojuegosModule,
    ProveedoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
