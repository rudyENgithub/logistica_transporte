import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Envio } from 'src/app/models/envios.model';
import { EnvioService } from 'src/app/services/envio.service';

@Component({
  selector: 'app-envio-details',
  templateUrl: './envio-details.component.html',
  styleUrls: ['./envio-details.component.css']
})
export class EnvioDetailsComponent implements OnInit {

  

  @Input() viewMode = false;

  message = '';

  @Input() currentEnvio: Envio = {
  /*  id_envio: 0,
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
    producto: '',
    modalidad: ''*/

    cantidadproducto: 12,
    clientedireccion: "San Juan",
    clientenombre: "Juan Manuel Marquez",
    fechaentrega:  new Date("2014-01-01T23:28:57.000+00:00"),
    fecharegistro:  new Date("2014-01-01T23:28:57.000+00:00"),
    id_bodega: 1,
    id_transporte: 1,
    id_usuario: 1,
    logisticamaritima: false,
    logisticaterrestre: true,
    modalidad: '',
    numeroguia: "1010204050",
    preciodescuento: 0,
    precioenvio: 0,
    producto: ''
  };


  


  constructor(
    private envioService: EnvioService,
    private route: ActivatedRoute,
    private router: Router) { }

 
  ngOnInit(): void {
    
      this.message = '';
      this.getEnvio(this.route.snapshot.params["id_envio"]);
    
  }

  getEnvio(id_envio: string): void {
    this.envioService.get(id_envio)
      .subscribe({
        next: (data) => {
          
          this.currentEnvio = data;
          console.log(data);
          
        },
        error: (e) => console.error(e)
      });
  }

  updateEnvio(): void {
    this.message = '';

    this.envioService.update(this.currentEnvio.id_envio, this.currentEnvio)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Este Envio fue actualizado exitosamente!';
        },
        error: (e) => console.error(e)
      });
   
  }

  deleteEnvio(): void {
    this.envioService.delete(this.currentEnvio.id_envio)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/envios']);
        },
        error: (e) => console.error(e)
      });
  }
   
  }
  


