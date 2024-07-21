// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';
// import { Usuario } from 'src/domain/usuario';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:8080/PPK/webservice/Usuario';

//   constructor(private http: HttpClient) { }

//   isAuthenticated(): boolean {
//     return !!localStorage.getItem('authToken');
//   }

//   authenticate(username: string, password: string): Observable<boolean> {
//     console.log('Autenticando usuario:', username);
//     return this.http.get<Usuario[]>(`${this.apiUrl}/List`).pipe(
//       map(usuarios => {
//         const usuario = usuarios.find(user => user.usuario.trim() === username.trim() && user.password.trim() === password.trim());
//         if (usuario) {
//           if (usuario.estado === 'Inactivo') {
//             alert('El usuario está inactivo.');
//             return false;
//           }
//           const token = 'genericAuthToken';
//           localStorage.setItem('authToken', token);
//           console.log('Autenticación exitosa');
//           return true;
//         } else {
//           console.log('Usuario no encontrado o credenciales incorrectas');
//           alert('Usuario no encontrado o credenciales incorrectas');
//           return false;
//         }
//       }),
//       catchError(error => {
//         console.error('Error durante la autenticación:', error);
//         return of(false);
//       })
//     );
//   }

//   login(username: string, password: string): Observable<boolean> {
//     return this.authenticate(username, password).pipe(
//       map(isAuthenticated => {
//         if (isAuthenticated) {
//           localStorage.setItem('currentUser', username);
//         }
//         return isAuthenticated;
//       })
//     );
//   }

//   logout(): void {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('currentUser');
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Usuario } from 'src/domain/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/PPK/webservice/Usuario';

  constructor(private http: HttpClient) { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getCurrentUserRole(): string | null {
    return localStorage.getItem('userRole');
  }
  getCurrentUserName(): string | null {
    return localStorage.getItem('user');
  }

  authenticate(username: string, password: string): Observable<boolean> {
    console.log('Autenticando usuario:', username);
    return this.http.get<Usuario[]>(`${this.apiUrl}/List`).pipe(
      map(usuarios => {
        const usuario = usuarios.find(user => user.usuario.trim() === username.trim() && user.password.trim() === password.trim());
        if (usuario) {
          const token = 'genericAuthToken';
          localStorage.setItem('authToken', token);
          if (usuario.rol) {
            localStorage.setItem('userRole', usuario.rol.descripcion); // Guardar el rol del usuario
            localStorage.setItem('user', usuario.usuario);
          } else {
            localStorage.removeItem('userRole'); // Remover el rol si no está definido
          }
          console.log('Autenticación exitosa');
          return true;
        } else {
          console.log('Usuario no encontrado o credenciales incorrectas');
          return false;
        }
      }),
      catchError(error => {
        console.error('Error durante la autenticación:', error);
        return of(false);
      })
    );
  }

  login(username: string, password: string): Observable<boolean> {
    return this.authenticate(username, password).pipe(
      map(isAuthenticated => {
        if (isAuthenticated) {
          localStorage.setItem('currentUser', username);
        }
        return isAuthenticated;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userRole');
  }
}
