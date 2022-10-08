import { Component, OnInit } from '@angular/core';
import { Bodega } from 'src/app/models/bodegas.model';
import { Envio } from 'src/app/models/envios.model';
import { Transporte } from 'src/app/models/transporte.model';
import { BodegaService } from 'src/app/services/bodega.service';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EnvioService } from 'src/app/services/envio.service';
import {Router} from "@angular/router"
import { TransporteService } from 'src/app/services/transporte.service';
import { OAuthService, OAuthErrorEvent } from 'angular-oauth2-oidc';
import swal from 'sweetalert2';



@Component({
  selector: 'app-add-envio',
  templateUrl: './add-envio.component.html',
  styleUrls: ['./add-envio.component.css']
})
export class AddEnvioComponent implements OnInit {

  tipo_logistica: any = ['Maritima', 'Terrestre'];

  descuento : number = 0;

  bodega: Bodega = {
    id_bodega: '',
    nombrebodega: '',
    tipobodega: ''
  };

  transporte: Transporte = {
    id_transporte: '',
    placa: '',
    desctransporte: '',
    numeroflota: '',
    tipotransporte: ''
    

  };

  envio: Envio = {
   
    id_usuario: 1,
    id_transporte: 0,
    cantidadproducto: 0,
    fecharegistro: new Date("Fri Dec 08 2022 07:44:57"),
    fechaentrega: new Date("Fri Dec 08 2022 07:44:57"),
    id_bodega: 0,
    precioenvio: 0,
    preciodescuento: 0,
    numeroguia: '',

    logisticaterrestre: false,
    logisticamaritima: false,
    clientenombre: '',
    clientedireccion: '',
    producto: ''

  };

  form: FormGroup = new FormGroup({
    nombre_cliente: new FormControl(''),
    
  });
  submitted = false;
 
  preciodescuento: boolean = false;
  descuentomaritimo: boolean = false;
  descuentoterrestre: boolean = false;
  porcentajedecuento: number = 0;

  currentTutorial: Bodega = {};
  bodegas?: Bodega[];

  currentIndex = -1;
  tipo = '';

  constructor(private bodegaService: BodegaService, private envioService: EnvioService, private transporteService: TransporteService, private router: Router) { }

  /*
  changeFn(event) {
    
    console.log(e.target.value);
  }*/

  onKey(event: any) { // without type info
    //this.values += event.target.value + ' | ';
    console.log(event.target.value);
    console.log(this.bodega.tipobodega);
    if (event.target.value > 10 && this.bodega.tipobodega === 'Terrestre'){
      this.preciodescuento = true;
      this.porcentajedecuento = 5;
      console.log("Descuento 5%");
      //this.form.controls['preciodesc'].disable();
     

    }
    else if(event.target.value > 10  && this.bodega.tipobodega === 'Maritima'){
      this.preciodescuento = true;
      this.porcentajedecuento = 3;
      console.log("Descuento 3%");

    }
  }

  newEnvio(): void {
    this.submitted = false;
    /*this.envio = {
      title: '',
      description: '',
      published: false
    };*/
  }


  onKeyCalculo(event: any) { // without type info
    console.log("onKeyCalculo");
    console.log(event.target.value);
    console.log( ((event.target.value  * this.porcentajedecuento)/100) );
  
    this.descuento = ((event.target.value  * this.porcentajedecuento)/100);
    this.envio.preciodescuento = event.target.value - this.descuento

    //event.target.value
  }
/*
  calcularDescuento( ){

    this.envio.preciodescuento = (this.envio.precioenvio?.valueOf * this.porcentajedecuento ) / 100;

  }*/

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
 
  saveEnvio(): void {

    if(this.envio.clientenombre == null){
     // swal('Error Login', 'Username o password vacías!', 'error');


    }
    let ismaritima: boolean = false;
    let isterrestre: boolean = false;

    if (this.bodega.tipobodega === 'Terrestre'){
      ismaritima: false ;
      isterrestre: true ;
    }else if(this.bodega.tipobodega === 'Maritima'){
      ismaritima: true ;
      isterrestre: false ;
    }

    const data = {
    id_usuario :1,
    id_transporte: 1,
    cantidadproducto:this.envio.cantidadproducto,
    fecharegistro: this.envio.fecharegistro ,
    fechaentrega: this.envio.fechaentrega ,
    id_bodega:this.bodega.id_bodega,
    precioenvio: this.envio.precioenvio,
    numeroguia: this.envio.numeroguia,
    logisticaterrestre: isterrestre,
    logisticamaritima: ismaritima,
    clientenombre: this.envio.clientenombre,
    clientedireccion: this.envio.clientedireccion,
    producto: this.envio.producto,
    preciodescuento: this.envio.preciodescuento
    };

    const dataTransporte = {
     
      placa: this.transporte.placa,
     desctransporte: this.bodega.tipobodega,
       numeroflota:this.transporte.numeroflota
      };

    console.log(data);
    console.log(dataTransporte);
this.transporteService.create(dataTransporte)
.subscribe({
  next: (res1) => {
    //console.log(res1);
    /** */
    console.log(res1.id_transporte);
    data.id_transporte = res1.id_transporte;
    this.envioService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res.id_envio);
     //   data.id_transporte:res.getI
        this.submitted = true;
        this.router.navigate(['/listEnvios'])

      },
      error: (e) => console.error(e)
    });
     /** */

  },
  error: (e) => console.error(e)
});

  
  }

  ngOnInit(): void {
  }

  searchTipoBodega(): void {

    console.log("searchTipoBodega");
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.bodegaService.findBybodegaTipo(this.bodega.tipobodega)
      .subscribe({
        next: (data) => {
          this.bodegas = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  //const asyncGreeting = async () => 'Greetings';

  //asyncGreeting().then(result => console.log(result));
/*
  async function loadComponents() {
    try {
        this.components = await fetchComponentsByType('charts');
    }
    .catch(err) {
        logger.error(err);
    }
}*/




}
