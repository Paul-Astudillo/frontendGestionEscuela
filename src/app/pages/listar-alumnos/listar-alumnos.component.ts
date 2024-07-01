import { Component } from '@angular/core';
import { AlumnoService } from 'src/app/service/alumno.service';
import { Alumno } from 'src/domain/alumno';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.scss']
})
export class ListarAlumnosComponent {
  alumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  obtenerAlumnos(): void {
    this.alumnoService.getAll().subscribe(
      (data: Alumno[]) => {
        this.alumnos = data;
      },
      (error) => {
        console.error('Error al obtener los alumnos', error);
      }
    );
  }

  eliminarAlumno(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este alumno?')) {
      this.alumnoService.delete(id).subscribe(
        () => {
          this.obtenerAlumnos(); // Refrescar la lista después de eliminar
        },
        (error) => {
          console.error('Error al eliminar el alumno', error);
        }
      );
    }
  }
}
