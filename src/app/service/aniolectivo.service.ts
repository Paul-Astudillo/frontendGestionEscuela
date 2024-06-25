import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnioLectivo } from 'src/domain/aniolectivo';

@Injectable({
  providedIn: 'root'
})
export class AnioLectivoService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/AnioLectivo';

  constructor(private http: HttpClient) { }

  getAll(): Observable<AnioLectivo[]> {
    return this.http.get<AnioLectivo[]>(`${this.apiUrl}/List`);
  }

  getById(id: number): Observable<AnioLectivo> {
    return this.http.get<AnioLectivo>(`${this.apiUrl}/buscar/${id}`);
  }

  save(anioLectivo: AnioLectivo): Observable<AnioLectivo> {
    return this.http.post<AnioLectivo>(`${this.apiUrl}/guardar`, anioLectivo);
  }

  update(anioLectivo: AnioLectivo): Observable<AnioLectivo> {
    return this.http.put<AnioLectivo>(`${this.apiUrl}/actualizar`, anioLectivo);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }
}
