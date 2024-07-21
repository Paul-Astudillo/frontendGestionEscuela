// import { Component } from '@angular/core';
// import { CursoService } from 'src/app/service/curso.service';
// import { Curso } from 'src/domain/curso';

// @Component({
//   selector: 'app-listar-cursos',
//   templateUrl: './listar-cursos.component.html',
//   styleUrls: ['./listar-cursos.component.scss']
// })
// export class ListarCursosComponent {
//   cursos: Curso[] = [];

//   constructor(private cursoService: CursoService) { }

//   ngOnInit(): void {
//     this.obtenerCursos();
//   }

//   obtenerCursos(): void {
//     this.cursoService.getAll().subscribe(
//       (data: Curso[]) => {
//         this.cursos = data;
//       },
//       (error) => {
//         console.error('Error al obtener los cursos', error);
//       }
//     );
//   }

//   eliminarCurso(id: number): void {
//     if (confirm('¿Está seguro de que desea eliminar este curso?')) {
//       this.cursoService.delete(id).subscribe(
//         () => {
//           this.obtenerCursos(); // Refrescar la lista después de eliminar
//         },
//         (error) => {
//           console.error('Error al eliminar el curso', error);
//         }
//       );
//     }
//   }
// }

import { Component } from '@angular/core';
import { CursoService } from 'src/app/service/curso.service';
import { Curso } from 'src/domain/curso';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.scss']
})
export class ListarCursosComponent {
  cursos: Curso[] = [];

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.obtenerCursos();
  }

  obtenerCursos(): void {
    this.cursoService.getAll().subscribe(
      (data: Curso[]) => {
        this.cursos = data;
      },
      (error: any) => {
        console.error('Error al obtener los cursos', error);
      }
    );
  }

  eliminarCurso(id: number): void {
    if (confirm('¿Está seguro de que desea eliminar este curso?')) {
      this.cursoService.delete(id).subscribe(
        () => {
          this.obtenerCursos(); // Refrescar la lista después de eliminar
        },
        (error: any) => {
          console.error('Error al eliminar el curso', error);
        }
      );
    }
  }
}
