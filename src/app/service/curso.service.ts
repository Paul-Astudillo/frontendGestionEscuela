import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from 'src/domain/curso';

interface DocenteWithCurso {
  id: number;
  nombre: string;
  apellido: string;
  curso?: Curso;
}

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/Curso';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Curso[]> {
    return this.http.get<any[]>(`${this.apiUrl}/List`).pipe(
      map(data => data.map(item => this.removeCircularReferences(item)))
    );
  }

  getById(id: number): Observable<Curso> {
    return this.http.get<any>(`${this.apiUrl}/buscar/${id}`).pipe(
      map(item => this.removeCircularReferences(item))
    );
  }

  save(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.apiUrl}/guardar`, curso);
  }

  update(curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/actualizar`, curso);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }

  private removeCircularReferences(item: any): Curso {
    const curso: Curso = {
      id: item.id,
      descripcion: item.descripcion,
      docenteId: item.docente ? item.docente.id : null,
      anioLectivoId: item.anioLectivo ? item.anioLectivo.id : null,
      docente: item.docente ? { id: item.docente.id, nombre: item.docente.nombre, apellido: item.docente.apellido } : undefined,
      anioLectivo: item.anioLectivo ? { id: item.anioLectivo.id, descripcion: item.anioLectivo.descripcion } : undefined
    };

    // Cast `docente` to `DocenteWithCurso` and remove circular reference
    if (curso.docente) {
      const docenteWithCurso = curso.docente as DocenteWithCurso;
      delete docenteWithCurso.curso;
    }

    return curso;
  }
}
