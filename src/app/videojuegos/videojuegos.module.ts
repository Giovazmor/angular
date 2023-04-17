import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CatalogoProductosComponent } from './catalogo-productos/catalogo-productos.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';
import { BuscarProductosComponent } from './buscar-productos/buscar-productos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    NuevoProductoComponent
  ],
  declarations: [
    CatalogoProductosComponent,
    NuevoProductoComponent,
    BuscarProductosComponent
  ]
})
export class VideojuegosModule { }
