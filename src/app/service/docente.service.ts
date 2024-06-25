import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from 'src/domain/docente';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/Docente';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Docente[]> {
    return this.http.get<Docente[]>(`${this.apiUrl}/List`);
  }

  getById(id: number): Observable<Docente> {
    return this.http.get<Docente>(`${this.apiUrl}/buscar/${id}`);
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
