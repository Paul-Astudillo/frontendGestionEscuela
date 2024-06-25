import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/domain/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/Curso';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/List`);
  }

  getById(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/buscar/${id}`);
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
