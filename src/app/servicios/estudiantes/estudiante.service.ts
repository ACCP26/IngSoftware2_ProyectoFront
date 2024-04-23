import { inject, Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Estudiante} from "../componentes/estudiantes/estudiante";


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  urlRest = 'http://localhost:8863/api/estudiantes';

  private httpClient = inject(httpClient)

  httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})};

  public registrar(estudiante: Estudiante){
    return this.httpClient.post<Estudiante>(this.urlRest,estudiante,this.httpOptions);
  }
}
