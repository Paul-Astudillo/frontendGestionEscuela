import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CabeceraFactura } from 'src/domain/cabecera-factura';

@Injectable({
  providedIn: 'root'
})
export class CabeceraFacturaService {

  private apiUrl = 'http://localhost:8080/PPK/webservice/CabeceraFactura';

  constructor(private http: HttpClient) { }

  getAll(): Observable<CabeceraFactura[]> {
    return this.http.get<CabeceraFactura[]>(`${this.apiUrl}/List`);
  }

  getById(id: number): Observable<CabeceraFactura> {
    return this.http.get<CabeceraFactura>(`${this.apiUrl}/buscar/${id}`);
  }

  save(cabeceraFactura: CabeceraFactura): Observable<CabeceraFactura> {
    return this.http.post<CabeceraFactura>(`${this.apiUrl}/guardar`, cabeceraFactura);
  }

  update(cabeceraFactura: CabeceraFactura): Observable<CabeceraFactura> {
    return this.http.put<CabeceraFactura>(`${this.apiUrl}/actualizar`, cabeceraFactura);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }
}
