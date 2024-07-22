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
