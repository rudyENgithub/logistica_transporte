export class Envio {
    id_envio?: any;
    id_usuario?:number
    id_transporte?: number;
    cantidadproducto?:number;
    fecharegistro?:Date;
    fechaentrega?:Date;
    id_bodega?:number;
    precioenvio?: number;
    numeroguia?: string;
    logisticaterrestre?: boolean;
    logisticamaritima?: boolean;
    clientenombre?: string;
    clientedireccion?: string;
    producto?: string;
    modalidad?: string;
    preciodescuento?: number;
  
  }