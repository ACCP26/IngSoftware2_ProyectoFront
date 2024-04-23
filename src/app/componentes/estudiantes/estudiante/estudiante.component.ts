import { Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router"
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {EstudiantesService} from "../../servicios/estudiante.service";
import {Estudiante} from "../estudiante";
import {Observable} from "rxjs";
import {response} from "express";


@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export default class EstudianteComponent implements OnInit{

  private f_builder = inject(FormBuilder);
  private estudianteServicio = inject(EstudiantesService);
  private router = inject(Router);
  private router = inject(ActivatedRoute);
  form? : FormGroup;
  estudiante? : Estudiante;
  errors?: string[]


  registrar(){

    if(this.form?.invalid){
        return;
    }
    let request: Observable<Estudiante>;
    const estudiante = this.form!.value;

    request = this.estudianteServicio.registrar(estudiante);
}
