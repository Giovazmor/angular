import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { productos } from '../modelos/producto.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = 'http://localhost:4000'; //URL to Rest API
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  obtener_Todos_Prod(){
    return this.http.get<any[]>("http://localhost:4000/videojuego/todos")
  }
  nuevo_prod(info: productos) {
    return this.http.post<productos>(this.url + "/videojuego/nuevojuego", info, this.httpOptions);
  }
}
