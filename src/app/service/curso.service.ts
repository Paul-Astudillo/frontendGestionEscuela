import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Curso } from 'src/domain/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/Curso';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Curso[]> {
    return this.http.get<any[]>(`${this.apiUrl}/List`).pipe(
      map(data => data.map(item => new Curso({
        id: item.id,
        descripcion: item.descripcion,
        docenteId: item.docente ? item.docente.id : null,
        anioLectivoId: item.anioLectivo ? item.anioLectivo.id : null,
        docente: item.docente ? { id: item.docente.id, nombre: item.docente.nombre, apellido: item.docente.apellido } : undefined,
        anioLectivo: item.anioLectivo ? { id: item.anioLectivo.id, descripcion: item.anioLectivo.descripcion } : undefined
      })))
    );
  }

  getById(id: number): Observable<Curso> {
    return this.http.get<any>(`${this.apiUrl}/buscar/${id}`).pipe(
      map(item => new Curso({
        id: item.id,
        descripcion: item.descripcion,
        docenteId: item.docente ? item.docente.id : null,
        anioLectivoId: item.anioLectivo ? item.anioLectivo.id : null,
        docente: item.docente ? { id: item.docente.id, nombre: item.docente.nombre, apellido: item.docente.apellido } : undefined,
        anioLectivo: item.anioLectivo ? { id: item.anioLectivo.id, descripcion: item.anioLectivo.descripcion } : undefined
      }))
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
}
