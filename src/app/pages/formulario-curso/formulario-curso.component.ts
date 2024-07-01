import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnioLectivoService } from 'src/app/service/aniolectivo.service';
import { CursoService } from 'src/app/service/curso.service';
import { DocenteService } from 'src/app/service/docente.service';
import { AnioLectivo } from 'src/domain/aniolectivo';
import { Curso } from 'src/domain/curso';
import { Docente } from 'src/domain/docente';

@Component({
  selector: 'app-formulario-curso',
  templateUrl: './formulario-curso.component.html',
  styleUrls: ['./formulario-curso.component.scss']
})
export class FormularioCursoComponent {
  cursoForm: FormGroup;
  cursoId: number | null = null;
  docentes: Docente[] = [];
  aniosLectivos: AnioLectivo[] = [];

  constructor(
    private fb: FormBuilder,
    private cursoService: CursoService,
    private docenteService: DocenteService,
    private anioLectivoService: AnioLectivoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.cursoForm = this.fb.group({
      descripcion: ['', Validators.required],
      docenteId: ['', Validators.required],
      anioLectivoId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cursoId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id')! : null;
    if (this.cursoId) {
      this.cursoService.getById(this.cursoId).subscribe(
        data => this.cursoForm.patchValue(data),
        error => console.error('Error al cargar el curso', error)
      );
    }
    this.docenteService.getAll().subscribe(
      data => this.docentes = data,
      error => console.error('Error al cargar los docentes', error)
    );
    this.anioLectivoService.getAll().subscribe(
      data => this.aniosLectivos = data,
      error => console.error('Error al cargar los años lectivos', error)
    );
  }

  onSubmit(): void {
    if (this.cursoForm.valid) {
      const curso: Curso = this.cursoForm.value;
      if (this.cursoId) {
        curso.id = this.cursoId;
        this.cursoService.update(curso).subscribe(
          () => this.router.navigate(['/pagina/listaCurso']),
          error => console.error('Error al actualizar el curso', error)
        );
      } else {
        this.cursoService.save(curso).subscribe(
          () => this.router.navigate(['/pagina/listaCurso']),
          error => console.error('Error al guardar el curso', error)
        );
      }
    }
  }

}
