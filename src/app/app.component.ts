
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
//   }

//   onLoginSuccess() {
//     this.isAuthenticated = true;
//     this.router.navigate(['/']); // Navegar a la página principal o a la deseada después del login
//   }

//   logout() {
//     this.authService.logout();
//     this.isAuthenticated = false;
//     this.router.navigate(['/pagina/login']); // Navegar a la página de login después de cerrar sesión
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
  userRole: string | null = null;
  user: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.userRole = this.authService.getCurrentUserRole();
    this.user=this.authService.getCurrentUserName();
  }

  onLoginSuccess() {
    this.isAuthenticated = true;
    this.userRole = this.authService.getCurrentUserRole();
    this.user=this.authService.getCurrentUserName();
    console.log(this.userRole);
    this.router.navigate(['/']); // Navegar a la página principal o a la deseada después del login
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;
    this.userRole = null;
    this.user=null;
    this.router.navigate(['/pagina/login']); // Navegar a la página de login después de cerrar sesión
  }
}
