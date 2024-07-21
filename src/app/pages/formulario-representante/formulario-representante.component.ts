import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RepresentanteService } from 'src/app/service/representante.service';
import { Representante } from 'src/domain/representante';

@Component({
  selector: 'app-formulario-representante',
  templateUrl: './formulario-representante.component.html',
  styleUrls: ['./formulario-representante.component.scss']
})
export class FormularioRepresentanteComponent {
  representanteForm: FormGroup;
  representanteId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private representanteService: RepresentanteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.representanteForm = this.fb.group({
      cedula: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      profesion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.representanteId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id')! : null;
    if (this.representanteId) {
      this.representanteService.getById(this.representanteId).subscribe(
        data => this.representanteForm.patchValue(data),
        error => console.error('Error al cargar el representante', error)
      );
    }
  }

  onSubmit(): void {
    if (this.representanteForm.valid) {
      const representante: Representante = this.representanteForm.value;
      if (this.representanteId) {
        representante.id = this.representanteId;
        this.representanteService.update(representante).subscribe(
          () => this.router.navigate(['/pagina/listaRepresentante']),
          error => console.error('Error al actualizar el representante', error)
        );
      } else {
        this.representanteService.save(representante).subscribe(
          () => this.router.navigate(['/pagina/listaRepresentante']),
          error => console.error('Error al guardar el representante', error)
        );
      }
    }
  }

}
