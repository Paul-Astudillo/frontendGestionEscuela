import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from 'src/domain/matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/Matricula';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(`${this.apiUrl}/List`);
  }

  getById(id: number): Observable<Matricula> {
    return this.http.get<Matricula>(`${this.apiUrl}/buscar/${id}`);
  }

  save(matricula: Matricula): Observable<Matricula> {
    return this.http.post<Matricula>(`${this.apiUrl}/guardar`, matricula);
  }

  update(matricula: Matricula): Observable<Matricula> {
    return this.http.put<Matricula>(`${this.apiUrl}/actualizar`, matricula);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }
}
