import { Component } from '@angular/core';
import { DocenteService } from 'src/app/service/docente.service';
import { Docente } from 'src/domain/docente';

@Component({
  selector: 'app-listar-docentes',
  templateUrl: './listar-docentes.component.html',
  styleUrls: ['./listar-docentes.component.scss']
})
export class ListarDocentesComponent {
  docentes: Docente[] = [];

  constructor(private docenteService: DocenteService) { }

  ngOnInit(): void {
    this.obtenerDocentes();
  }

  obtenerDocentes(): void {
    this.docenteService.getAll().subscribe(
      (data: Docente[]) => {
        this.docentes = data;
      },
      (error) => {
        console.error('Error al obtener los docentes', error);
      }
    );
  }

}
