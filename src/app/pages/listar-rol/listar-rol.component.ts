import { Component } from '@angular/core';
import { RolService } from 'src/app/service/rol.service';
import { Rol } from 'src/domain/rol';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.scss']
})
export class ListarRolComponent {
  roles: Rol[] = [];

  constructor(private rolService: RolService) { }

  ngOnInit(): void {
    this.obtenerRoles();
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
}
