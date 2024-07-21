import { Component, OnInit } from '@angular/core';
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
export class FormularioAlumnoComponent implements OnInit {
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
    this.route.paramMap.subscribe(params => {
      this.alumnoId = +params.get('id')!;
      if (this.alumnoId) {
        this.alumnoService.getById(this.alumnoId).subscribe((alumno: Alumno) => {
          alumno.fechaN = new Date(alumno.fechaN);
          this.alumnoForm.patchValue(alumno);
        });
      }
    });

    this.representanteService.getAll().subscribe((data: Representante[]) => {
      this.representantes = data;
    });
  }

  onSubmit(): void {
    if (this.alumnoForm.invalid) {
      return;
    }

    // Convertir representanteId a número
    const formValues = this.alumnoForm.value;
    formValues.representanteId = Number(formValues.representanteId);
    console.log('Representante ID (convertido):', formValues.representanteId);

    const alumno: Alumno = new Alumno(formValues);
    console.log('Datos del alumno antes de enviar:', alumno); // Verifica los datos que se envían, especialmente representanteId

    if (this.alumnoId) {
      alumno.id = this.alumnoId;
      this.alumnoService.update(alumno).subscribe(response => {
        console.log('Respuesta del servidor al actualizar:', response);
        this.router.navigate(['/pagina/listaAlumno']);
      }, error => {
        console.error('Error al actualizar el alumno:', error);
      });
    } else {
      this.alumnoService.save(alumno).subscribe(response => {
        console.log('Respuesta del servidor al guardar:', response);
        this.router.navigate(['/pagina/listaAlumno']);
      }, error => {
        console.error('Error al guardar el alumno:', error);
      });
    }
  }
}
