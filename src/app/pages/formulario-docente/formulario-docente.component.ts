import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/service/curso.service';
import { DocenteService } from 'src/app/service/docente.service';
import { Curso } from 'src/domain/curso';
import { Docente } from 'src/domain/docente';


@Component({
  selector: 'app-formulario-docente',
  templateUrl: './formulario-docente.component.html',
  styleUrls: ['./formulario-docente.component.scss']
})
export class FormularioDocenteComponent {
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
      cursoId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.docenteId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id')! : null;
    if (this.docenteId) {
      this.docenteService.getById(this.docenteId).subscribe(
        data => this.docenteForm.patchValue(data),
        error => console.error('Error al cargar el docente', error)
      );
    }
  }

  onSubmit(): void {
    if (this.docenteForm.valid) {
      const docente: Docente = this.docenteForm.value;
      if (this.docenteId) {
        docente.id = this.docenteId;
        this.docenteService.update(docente).subscribe(
          () => this.router.navigate(['/pagina/listaDocente']),
          error => console.error('Error al actualizar el docente', error)
        );
      } else {
        this.docenteService.save(docente).subscribe(
          () => this.router.navigate(['/pagina/listaDocente']),
          error => console.error('Error al guardar el docente', error)
        );
      }
    }
  }

}
