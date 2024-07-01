import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from 'src/domain/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private apiUrl = 'http://localhost:8080/PPK/webservice/Rol'; 

  constructor(private http: HttpClient) { }

  getAll(): Observable<Rol[]> {
    return this.http.get<Rol[]>(`${this.apiUrl}/List`);
  }

  getById(id: number): Observable<Rol> {
    return this.http.get<Rol>(`${this.apiUrl}/buscar/${id}`);
  }

  save(rol: Rol): Observable<Rol> {
    return this.http.post<Rol>(`${this.apiUrl}/guardar`, rol);
  }

  update(rol: Rol): Observable<Rol> {
    return this.http.put<Rol>(`${this.apiUrl}/actualizar`, rol);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }
}
