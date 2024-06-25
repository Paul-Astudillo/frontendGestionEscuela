import { Component } from '@angular/core';
import { MatriculaService } from 'src/app/service/matricula.service';
import { Matricula } from 'src/domain/matricula';

@Component({
  selector: 'app-listar-matriculas',
  templateUrl: './listar-matriculas.component.html',
  styleUrls: ['./listar-matriculas.component.scss']
})
export class ListarMatriculasComponent {
  matriculas: Matricula[] = [];

  constructor(private matriculaService: MatriculaService) { }

  ngOnInit(): void {
    this.obtenerMatriculas();
  }

  obtenerMatriculas(): void {
    this.matriculaService.getAll().subscribe(
      (data: Matricula[]) => {
        this.matriculas = data;
      },
      (error) => {
        console.error('Error al obtener las matrículas', error);
      }
    );
  }

}
