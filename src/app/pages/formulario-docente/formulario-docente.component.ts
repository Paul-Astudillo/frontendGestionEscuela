import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocenteService } from 'src/app/service/docente.service';
import { Curso } from 'src/domain/curso';
import { Docente } from 'src/domain/docente';

@Component({
  selector: 'app-formulario-docente',
  templateUrl: './formulario-docente.component.html',
  styleUrls: ['./formulario-docente.component.scss']
})
export class FormularioDocenteComponent implements OnInit {
  docenteForm: FormGroup;
  docenteId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private docenteService: DocenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.docenteForm = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      especialidad: ['', Validators.required],
      cursoId: ['']
    });
  }

  ngOnInit(): void {
    this.docenteId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id')! : null;
    if (this.docenteId) {
      this.docenteService.getById(this.docenteId).subscribe(
        data => {
          if (data.curso) {
            this.docenteForm.patchValue({ ...data, cursoId: data.curso.id });
          } else {
            this.docenteForm.patchValue(data);
          }
        },
        error => console.error('Error al cargar el docente', error)
      );
    }
  }

  onSubmit(): void {
    if (this.docenteForm.valid) {
      const formValues = this.docenteForm.value;
      const docenteData = new Docente({
        cedula: formValues.cedula,
        nombre: formValues.nombre,
        apellido: formValues.apellido,
        email: formValues.email,
        telefono: formValues.telefono,
        especialidad: formValues.especialidad,
        curso: formValues.cursoId ? new Curso({ id: formValues.cursoId }) : undefined
      });

      if (this.docenteId) {
        docenteData.id = this.docenteId;
        this.docenteService.update(docenteData).subscribe(
          () => this.router.navigate(['/pagina/listaDocente']),
          error => console.error('Error al actualizar el docente', error)
        );
      } else {
        this.docenteService.save(docenteData).subscribe(
          () => this.router.navigate(['/pagina/listaDocente']),
          error => console.error('Error al guardar el docente', error)
        );
      }
    }
  }
}
