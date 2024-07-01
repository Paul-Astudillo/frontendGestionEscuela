import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from 'src/app/service/alumno.service';
import { RepresentanteService } from 'src/app/service/representante.service';
import { Alumno } from 'src/domain/alumno';
import { Representante } from 'src/domain/representante';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  alumnoForm: FormGroup;
  alumnoId: number | null = null;
  representantes: Representante[] = [];

  constructor(
    private fb: FormBuilder,
    private alumnoService: AlumnoService,
    private representanteService: RepresentanteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sexo: ['', Validators.required],
      fechaN: ['', Validators.required],
      direccion: ['', Validators.required],
      representanteId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.alumnoId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id')! : null;
    if (this.alumnoId) {
      this.alumnoService.getById(this.alumnoId).subscribe(
        data => this.alumnoForm.patchValue(data),
        error => console.error('Error al cargar el alumno', error)
      );
    }
    this.representanteService.getAll().subscribe(
      data => this.representantes = data,
      error => console.error('Error al cargar los representantes', error)
    );
  }

  onSubmit(): void {
    if (this.alumnoForm.valid) {
      const alumno: Alumno = this.alumnoForm.value;
      if (this.alumnoId) {
        alumno.id = this.alumnoId;
        this.alumnoService.update(alumno).subscribe(
          () => this.router.navigate(['/pagina/listaAlumno']),
          error => console.error('Error al actualizar el alumno', error)
        );
      } else {
        this.alumnoService.save(alumno).subscribe(
          () => this.router.navigate(['/pagina/listaAlumno']),
          error => console.error('Error al guardar el alumno', error)
        );
      }
    }
  }

}