// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'frontendGestionEscuela';
// }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from './service/auth.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {
//   title = 'frontendGestionEscuela';
//   isAuthenticated = false;

//   constructor(private authService: AuthService, private router: Router) {}

//   ngOnInit() {
//     this.isAuthenticated = this.authService.isAuthenticated();

//     // Redirige al login si no está autenticado
//     // if (!this.isAuthenticated) {
//     //   this.router.navigate(['/pagina/login']);
//     // }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontendGestionEscuela';
  isAuthenticated = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      if (isAuthenticated) {
        this.router.navigate(['/']); // Navegar a la página principal o a la deseada después del login
      } else {
        console.error('Login failed');
      }
    });
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/pagina/login']); // Navegar a la página de login después de cerrar sesión
  }
}

