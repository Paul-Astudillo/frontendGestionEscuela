import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { RolService } from 'src/app/service/rol.service';
import { Usuario } from 'src/domain/usuario';
import { Rol } from 'src/domain/rol';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  roles: Rol[] = [];
  estados: string[] = ['Activo', 'Inactivo'];

  constructor(private usuarioService: UsuarioService, private rolService: RolService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerRoles();
  }

  obtenerUsuarios(): void {
    this.usuarioService.getAll().subscribe(
      (data: Usuario[]) => {
        this.usuarios = data.map(usuario => {
          if (!usuario.rol) {
            usuario.rol = { id: 0, descripcion: '' };
          }
          return usuario;
        });
      },
      (error) => {
        console.error('Error al obtener los usuarios', error);
      }
    );
  }

  obtenerRoles(): void {
    this.rolService.getAll().subscribe(
      (data: Rol[]) => {
        this.roles = data;
      },
      (error) => {
        console.error('Error al obtener los roles', error);
      }
    );
  }

  actualizarUsuario(usuario: Usuario): void {
    this.usuarioService.update(usuario).subscribe(
      () => {
        console.log('Usuario actualizado:', usuario);
      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }

  ocultarPassword(password: string): string {
    return '*'.repeat(password.length);
  }
}
