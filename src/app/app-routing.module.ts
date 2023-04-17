import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoProductosComponent } from './videojuegos/catalogo-productos/catalogo-productos.component';
import { NuevoProductoComponent } from './videojuegos/nuevo-producto/nuevo-producto.component';
import { BuscarProductosComponent } from './videojuegos/buscar-productos/buscar-productos.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';

const routes: Routes = [
  {
    path: 'productosCatalogo',
    component: CatalogoProductosComponent
  },
  {
    path: 'productosBuscar',
    component: BuscarProductosComponent
  },
  {
    path: 'productosNuevo',
    component: NuevoProductoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
