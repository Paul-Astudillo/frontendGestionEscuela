// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';
// import { Usuario } from 'src/domain/usuario';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:8080/PPK/webservice/Usuario'; // URL del endpoint de autenticación

//   constructor(private http: HttpClient) { }

//   // Método para verificar si el usuario está autenticado
//   isAuthenticated(): boolean {
//     return !!localStorage.getItem('authToken');
//   }

//   // Método para autenticar al usuario
//   authenticate(usuario: Usuario): Observable<boolean> {
//     return this.http.post<{ token: string }>(`${this.apiUrl}/login`, usuario).pipe(
//       map(response => {
//         if (response.token) {
//           localStorage.setItem('authToken', response.token);
//           return true;
//         } else {
//           return false;
//         }
//       }),
//       // Manejando el error y devolviendo 'false' en caso de error
//       catchError(error => {
//         console.error('Authentication error', error);
//         return of(false);
//       })
//     );
//   }

//   // Método para iniciar sesión
//   login(username: string, password: string): Observable<boolean> {
//     const usuario = new Usuario({ usuario: username, password: password });
//     return this.authenticate(usuario);
//   }

//   // Método para cerrar sesión (eliminar el token)
//   logout(): void {
//     localStorage.removeItem('authToken');
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Usuario } from 'src/domain/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/Usuario'; // URL del endpoint de Usuario

  constructor(private http: HttpClient) { }

  // Método para verificar si el usuario está autenticado
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Método para autenticar al usuario
  authenticate(username: string, password: string): Observable<boolean> {
    console.log('Autenticando usuario:', username);
    return this.http.get<Usuario[]>(`${this.apiUrl}/List`).pipe(
      map(usuarios => {
        console.log('Usuarios obtenidos:', usuarios);
        const usuario = usuarios.find(user => user.usuario === username && user.password === password);
        if (usuario) {
          const token = 'genericAuthToken'; // Generar o recibir un token real
          localStorage.setItem('authToken', token);
          console.log('Autenticación exitosa');
          return true;
        } else {
          console.log('Usuario no encontrado o credenciales incorrectas');
          return false;
        }
      }),
      // Manejando el error y devolviendo 'false' en caso de error
      catchError(error => {
        console.error('Error durante la autenticación:', error);
        return of(false);
      })
    );
  }

  // Método para iniciar sesión
  login(username: string, password: string): Observable<boolean> {
    return this.authenticate(username, password).pipe(
      map(isAuthenticated => {
        if (isAuthenticated) {
          localStorage.setItem('currentUser', username); // Guardar el usuario actual
        }
        return isAuthenticated;
      })
    );
  }

  // Método para cerrar sesión (eliminar el token)
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
  }
}

