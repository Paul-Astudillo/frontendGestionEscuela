import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnioLectivoService } from 'src/app/service/aniolectivo.service';
import { AnioLectivo } from 'src/domain/aniolectivo';


@Component({
  selector: 'app-formulario-anio-lectivo',
  templateUrl: './formulario-anio-lectivo.component.html',
  styleUrls: ['./formulario-anio-lectivo.component.scss']
})
export class FormularioAnioLectivoComponent {
  anioLectivoForm: FormGroup;
  anioLectivoId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private anioLectivoService: AnioLectivoService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.anioLectivoForm = this.fb.group({
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.anioLectivoId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id')! : null;
    if (this.anioLectivoId) {
      this.anioLectivoService.getById(this.anioLectivoId).subscribe(
        data => this.anioLectivoForm.patchValue(data),
        error => console.error('Error al cargar el año lectivo', error)
      );
    }
  }

  onSubmit(): void {
    if (this.anioLectivoForm.valid) {
      const anioLectivo: AnioLectivo = this.anioLectivoForm.value;
      if (this.anioLectivoId) {
        anioLectivo.id = this.anioLectivoId;
        this.anioLectivoService.update(anioLectivo).subscribe(
          () => this.router.navigate(['/pagina/listaAnioLectivo']),
          error => console.error('Error al actualizar el año lectivo', error)
        );
      } else {
        this.anioLectivoService.save(anioLectivo).subscribe(
          () => this.router.navigate(['/pagina/listaAnioLectivo']),
          error => console.error('Error al guardar el año lectivo', error)
        );
      }
    }
  }

}
