export class productos{
    Nombre?:string;
    Categoria?:string;
    Version?:number;
    CantExistente?:number;
    Costo?:number;
    Precio?:number;
    Descripcion?:string;
    Origen?:string;
    FechaAdmicion:Date = new Date(2023, 2, 2, 17, 23, 42, 11);
    Foto?:null;
    archivoFoto?:File | null;
    Estado?:Vigencia;
}
export class Vigencia{
  vigencia?:string;
}
