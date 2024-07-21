// import { Component, EventEmitter, Output } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/service/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {

//   @Output() loginSuccess = new EventEmitter<void>();

//   constructor(private authService: AuthService, private router: Router) { }

//   // Método para manejar el envío del formulario de inicio de sesión
//   onLogin(): void {
//     this.authService.login();
//     this.loginSuccess.emit();
//     // this.router.navigate(['/inicio']);  // Redirige a la página deseada después de iniciar sesión
//     // location.reload(); // Recarga la página para actualizar el estado de autenticación
//   }
// }

import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<void>();
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    console.log('Intentando iniciar sesión con:', this.username);
    this.authService.login(this.username, this.password).subscribe(
      isAuthenticated => {
        if (isAuthenticated) {
          console.log('Login exitoso');
          this.loginSuccess.emit(); // Emitir void como se espera
        } else {
          // alert("Usuario no encontrado o credenciales incorrectas");
        }
      },
      error => {
        console.error('Error en la solicitud de autenticación:', error);
      }
    );
  }
  registro(){this.router.navigate(['pagina/registrarUsuario']);
  }
}
