import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolService } from 'src/app/service/rol.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Rol } from 'src/domain/rol';
import { Usuario } from 'src/domain/usuario';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent {
  usuarioForm: FormGroup;
  roles: Rol[] = [];

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private rolService: RolService,
    private router: Router
  ) {
    this.usuarioForm = this.fb.group({
      id: [0],
      usuario: ['', Validators.required],
      password: ['', Validators.required],
      estado: ['', Validators.required],
      rolId: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarRoles();
  }

  cargarRoles(): void {
    this.rolService.getAll().subscribe(
      (data: Rol[]) => {
        this.roles = data;
      },
      (error) => {
        console.error('Error al obtener los roles:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      const usuario: Usuario = this.usuarioForm.value;
      if (usuario.id) {
        this.usuarioService.update(usuario).subscribe(
          () => {
            this.router.navigate(['/pagina/listaUsuario']);
          },
          (error) => {
            console.error('Error al actualizar el usuario:', error);
          }
        );
      } else {
        this.usuarioService.save(usuario).subscribe(
          () => {
            this.router.navigate(['/pagina/listaUsuario']);
          },
          (error) => {
            console.error('Error al guardar el usuario:', error);
          }
        );
      }
    }
  }
}
