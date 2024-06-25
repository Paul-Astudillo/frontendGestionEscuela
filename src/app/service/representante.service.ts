import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepresentanteService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/Representante/List';

  constructor(private http: HttpClient) { }

  getRepresentantes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
