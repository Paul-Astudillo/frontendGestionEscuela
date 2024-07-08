import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from 'src/app/service/alumno.service';
import { AnioLectivoService } from 'src/app/service/aniolectivo.service';
import { CursoService } from 'src/app/service/curso.service';
import { MatriculaService } from 'src/app/service/matricula.service';
import { Alumno } from 'src/domain/alumno';
import { AnioLectivo } from 'src/domain/aniolectivo';
import { Curso } from 'src/domain/curso';
import { Matricula } from 'src/domain/matricula';

@Component({
  selector: 'app-formulario-matricula',
  templateUrl: './formulario-matricula.component.html',
  styleUrls: ['./formulario-matricula.component.scss']
})
export class FormularioMatriculaComponent {
  matriculaForm: FormGroup;
  matriculaId: number | null = null;
  cursos: Curso[] = [];
  anioLectivos: AnioLectivo[] = [];
  alumnos: Alumno[] = [];

  constructor(
    private fb: FormBuilder,
    private matriculaService: MatriculaService,
    private cursoService: CursoService,
    private anioLectivoService: AnioLectivoService,
    private alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.matriculaForm = this.fb.group({
      nombre: ['', Validators.required],
      cursoId: ['', Validators.required],
      anioLectivoId: ['', Validators.required],
      alumnoId: ['', Validators.required],
      matricula: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCursos();
    this.loadAnioLectivos();
    this.loadAlumnos();

    this.matriculaId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id')! : null;
    if (this.matriculaId) {
      this.matriculaService.getById(this.matriculaId).subscribe(
        data => this.matriculaForm.patchValue(data),
        error => console.error('Error al cargar la matrícula', error)
      );
    }
  }

  loadCursos(): void {
    this.cursoService.getAll().subscribe(
      data => this.cursos = data,
      error => console.error('Error al cargar los cursos', error)
    );
  }

  loadAnioLectivos(): void {
    this.anioLectivoService.getAll().subscribe(
      data => this.anioLectivos = data,
      error => console.error('Error al cargar los años lectivos', error)
    );
  }

  loadAlumnos(): void {
    this.alumnoService.getAll().subscribe(
      data => this.alumnos = data,
      error => console.error('Error al cargar los alumnos', error)
    );
  }

  onSubmit(): void {
    if (this.matriculaForm.valid) {
      const matricula: Matricula = this.matriculaForm.value;
      if (this.matriculaId) {
        matricula.id = this.matriculaId;
        this.matriculaService.update(matricula).subscribe(
          () => this.router.navigate(['/pagina/listaMatricula']),
          error => console.error('Error al actualizar la matrícula', error)
        );
      } else {
        this.matriculaService.save(matricula).subscribe(
          () => this.router.navigate(['/pagina/listaMatricula']),
          error => console.error('Error al guardar la matrícula', error)
        );
      }
    }
  }

}
