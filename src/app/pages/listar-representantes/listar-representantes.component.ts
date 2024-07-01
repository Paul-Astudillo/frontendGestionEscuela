import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepresentanteService } from 'src/app/service/representante.service';
import { Representante } from 'src/domain/representante';

@Component({
  selector: 'app-listar-representantes',
  templateUrl: './listar-representantes.component.html',
  styleUrls: ['./listar-representantes.component.scss']
})
export class ListarRepresentantesComponent implements OnInit {
  representantes: Representante[] = [];

  constructor(private representanteService: RepresentanteService) { }

  ngOnInit(): void {
    this.obtenerRepresentantes();
  }

  obtenerRepresentantes(): void {
    this.representanteService.getAll().subscribe(
      (data: Representante[]) => {
        this.representantes = data;
      },
      (error) => {
        console.error('Error al obtener los representantes', error);
      }
    );
  }

  eliminarRepresentante(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este representante?')) {
      this.representanteService.delete(id).subscribe(
        () => {
          this.obtenerRepresentantes(); // Refrescar la lista después de eliminar
        },
        (error) => {
          console.error('Error al eliminar el representante', error);
        }
      );
    }
  }
}

