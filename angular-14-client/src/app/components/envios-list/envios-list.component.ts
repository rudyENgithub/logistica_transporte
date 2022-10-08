import { Component, OnInit } from '@angular/core';
import { Envio } from 'src/app/models/envios.model';
import { EnvioService } from 'src/app/services/envio.service';
import { DataTablesModule } from 'angular-datatables';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';


import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';





@Component({
  selector: 'app-envios-list',
  templateUrl: './envios-list.component.html',
  styleUrls: ['./envios-list.component.css']
})
export class EnviosListComponent implements OnInit {

  //Users: USERS[] = UsersJson;
  
   envios?: Envio[];
   dtOptions: DataTables.Settings = {};
   dtTrigger: Subject<any> = new Subject();
   

  constructor(private envioService: EnvioService) {
   
    

    this.envioService.getAll()
    .subscribe({
      next: (data) => {
        this.envios = data;
        console.log(data);
        setTimeout(()=>{   // here I am rendering web api data
          $('#datatableexample').DataTable( {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu : [5, 10, 25]
        } );
        }, 1);

      },
      error: (e) => console.error(e)
    });

    //console.log(this.envios);
   }

   ngOnInit() {
    /*this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true,
      lengthMenu : [5, 10, 25]
    };
    this.envioService.getAll().subscribe(data => {
      this.envios = data;
      this.dtTrigger.next;
    });
    */
  }

  ngOnDestroy(): void {
   // this.dtTrigger.unsubscribe();
  }



}
