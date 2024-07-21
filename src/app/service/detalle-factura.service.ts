import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleFactura } from 'src/domain/detalle-factura';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacturaService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/DetalleFactura';

  constructor(private http: HttpClient) { }

  getByFacturaId(facturaId: number): Observable<DetalleFactura[]> {
    return this.http.get<DetalleFactura[]>(`${this.apiUrl}/buscar/${facturaId}`);
  }
}
