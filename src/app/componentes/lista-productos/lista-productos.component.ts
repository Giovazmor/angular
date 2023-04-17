import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  constructor(private servicioProd: ProductosService) { }
  listaProds:any=[] //creacion de un array
  //la funcion ngOnInit es la primera que se ejecuta al cargarse la pagina
  //la funcion subscribe recibe los datos que le envia la funcion
  //obtener_Todos_Prod ubicada en el servicio
  ngOnInit(): void {
    this.servicioProd.obtener_Todos_Prod()
    .subscribe(data=>{
      console.log(data)
      this.listaProds=data
    })
  }

}
