import { Component, OnInit } from '@angular/core';
import { Vigencia, productos } from 'src/app/modelos/producto.modelo';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit{


  imagen: any = null;
  messageErr = null;

  miVig:Vigencia={
    vigencia:''
  }

  miJuego:productos={
    Nombre:'',
    Categoria:'',
    CantExistente:0,
    Costo:0,
    Foto:null,
    Origen:'',
    Estado:this.miVig,
    FechaAdmicion: new Date()
  }

  res:any
  constructor(private servicioProd:ProductosService) { }

  ngOnInit(): void {
  }


  convertir_a_B64(event: any) {
    if (event.target.files && event.target.files[0]) {
      var file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imagen = reader.result;
      reader.readAsDataURL(file);
    }
  }

  enviarJuego():void{
    this.miJuego.Foto=this.imagen
    console.log(this.miJuego)
    console.log(this.miVig)
    try{
      this.res=this.servicioProd.nuevo_prod(this.miJuego)
      .subscribe(()=>console.log(this.res))
        } catch(error: any) {
          this.messageErr = error.error.message
        }
  }
}
