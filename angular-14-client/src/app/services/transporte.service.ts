import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bodega } from '../models/bodegas.model';
import { Envio } from '../models/envios.model';
import { Transporte } from '../models/transporte.model';

const baseUrl = 'http://localhost:8180/api/transporte';
//produccion casa
//const baseUrl = 'http://localhost:8080/spring-boot-jpa-h2-0.0.1-SNAPSHOT/api/bodegas';
//produccion aws
//const baseUrl = 'http://www.gruposytes.com:8080/spring-boot-jpa-h2-0.0.1-SNAPSHOT/api/bodegas';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Transporte[]> {
    return this.http.get<Transporte[]>(baseUrl);
  }

  get(id: any): Observable<Transporte> {
    return this.http.get<Envio>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}