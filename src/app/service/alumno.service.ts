import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Alumno } from 'src/domain/alumno';
import { Matricula } from 'src/domain/matricula';
import { Representante } from 'src/domain/representante';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/Alumno';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Alumno[]> {
    return this.http.get<any[]>(`${this.apiUrl}/List`).pipe(
      map(data => data.map(item => new Alumno({
        id: item.id,
        nombre: item.nombre,
        apellido: item.apellido,
        cedula: item.cedula,
        telefono: item.telefono,
        email: item.email,
        sexo: item.sexo,
        fechaN: this.convertToDate(item.fecha_N),
        direccion: item.direccion,
        representanteId: item.representante ? item.representante.id : null,
        representante: item.representante ? new Representante({
          id: item.representante.id,
          nombre: item.representante.nombre,
          apellido: item.representante.apellido,
          direccion: item.representante.direccion,
          telefono: item.representante.telefono,
          profesion: item.representante.profesion
        }) : undefined
      })))
    );
  }

  getById(id: number): Observable<Alumno> {
    return this.http.get<any>(`${this.apiUrl}/buscar/${id}`).pipe(
      map(item => new Alumno({
        id: item.id,
        nombre: item.nombre,
        apellido: item.apellido,
        cedula: item.cedula,
        telefono: item.telefono,
        email: item.email,
        sexo: item.sexo,
        fechaN: this.convertToDate(item.fecha_N),
        direccion: item.direccion,
        representanteId: item.representante ? item.representante.id : null,
        representante: item.representante ? new Representante({
          id: item.representante.id,
          nombre: item.representante.nombre,
          apellido: item.representante.apellido,
          direccion: item.representante.direccion,
          telefono: item.representante.telefono,
          profesion: item.representante.profesion
        }) : undefined
      }))
    );
  }

  save(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(`${this.apiUrl}/guardar`, alumno);
  }
  
  update(alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${this.apiUrl}/actualizar`, alumno);
  }
    
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminar/${id}`);
  }

  private convertToDate(dateString: string): Date {
    return dateString ? new Date(dateString) : new Date();
  }

  getByCedula(cedula: string): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.apiUrl}/buscarCedula/${cedula}`);
  }

  getMatriculaByAlumnoId(alumnoId: number): Observable<Matricula> {
    return this.http.get<Matricula>(`${this.apiUrl}/matricula/${alumnoId}`);
  }
}
