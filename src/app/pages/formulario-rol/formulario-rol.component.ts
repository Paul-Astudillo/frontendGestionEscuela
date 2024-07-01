import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RolService } from 'src/app/service/rol.service';
import { Rol } from 'src/domain/rol';

@Component({
  selector: 'app-formulario-rol',
  templateUrl: './formulario-rol.component.html',
  styleUrls: ['./formulario-rol.component.scss']
})
export class FormularioRolComponent {

  rolForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rolService: RolService,
    private router: Router
  ) {
    this.rolForm = this.fb.group({
      id: [0],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.rolForm.valid) {
      const rol: Rol = this.rolForm.value;
      if (rol.id) {
        this.rolService.update(rol).subscribe(
          () => {
            this.router.navigate(['/pagina/listaRol']);
          },
          (error) => {
            console.error('Error al actualizar el rol:', error);
          }
        );
      } else {
        this.rolService.save(rol).subscribe(
          () => {
            this.router.navigate(['/pagina/listaRol']);
          },
          (error) => {
            console.error('Error al guardar el rol:', error);
          }
        );
      }
    }
  }

}
