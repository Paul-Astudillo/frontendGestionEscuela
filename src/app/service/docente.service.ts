import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Curso } from 'src/domain/curso';
import { Docente } from 'src/domain/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/Docente';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Docente[]> {
    return this.http.get<any[]>(`${this.apiUrl}/List`).pipe(
      map(data => data.map(item => new Docente({
        id: item.id,
        cedula: item.cedula,
        nombre: item.nombre,
        apellido: item.apellido,
        email: item.email,
        telefono: item.telefono,
        especialidad: item.especialidad,
        curso: item.curso ? new Curso({
          id: item.curso.id,
          descripcion: item.curso.descripcion
        }) : undefined
      })))
    );
  }

  getById(id: number): Observable<Docente> {
    return this.http.get<any>(`${this.apiUrl}/buscar/${id}`).pipe(
      map(item => new Docente({
        id: item.id,
        cedula: item.cedula,
        nombre: item.nombre,
        apellido: item.apellido,
        email: item.email,
        telefono: item.telefono,
        especialidad: item.especialidad,
        curso: item.curso ? new Curso({
          id: item.curso.id,
          descripcion: item.curso.descripcion
        }) : undefined
      }))
    );
  }

  save(docente: Docente): Observable<Docente> {
    return this.http.post<Docente>(`${this.apiUrl}/guardar`, docente);
  }

  update(docente: Docente): Observable<Docente> {
    return this.http.put<Docente>(`${this.apiUrl}/actualizar`, docente);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }
}
