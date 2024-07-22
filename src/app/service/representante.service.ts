import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Representante } from 'src/domain/representante';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/Representante';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Representante[]> {
    return this.http.get<Representante[]>(`${this.apiUrl}/List`);
  }

  getById(id: number): Observable<Representante> {
    return this.http.get<Representante>(`${this.apiUrl}/buscar/${id}`);
  }

  save(representante: Representante): Observable<Representante> {
    return this.http.post<Representante>(`${this.apiUrl}/guardar`, representante);
  }

  update(representante: Representante): Observable<Representante> {
    return this.http.put<Representante>(`${this.apiUrl}/actualizar`, representante);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }

  getByCedula(cedula: string): Observable<Representante> {
    return this.http.get<Representante>(`${this.apiUrl}/buscarCedula/${cedula}`);
  }
}
