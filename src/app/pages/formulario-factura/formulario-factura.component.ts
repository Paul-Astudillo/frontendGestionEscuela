import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CabeceraFacturaService } from 'src/app/service/cabecera-factura.service';
import { MatriculaService } from 'src/app/service/matricula.service';
import { CabeceraFactura } from 'src/domain/cabecera-factura';
import { Matricula } from 'src/domain/matricula';

@Component({
  selector: 'app-formulario-factura',
  templateUrl: './formulario-factura.component.html',
  styleUrls: ['./formulario-factura.component.scss']
})
export class FormularioFacturaComponent {
  facturaForm: FormGroup;
  facturaId: number | null = null;
  matriculas: Matricula[] = []; // Añade una propiedad para las matrículas

  constructor(
    private fb: FormBuilder,
    private cabeceraFacturaService: CabeceraFacturaService,
    private matriculaService: MatriculaService, // Inyecta el servicio de matrículas
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.facturaForm = this.fb.group({
      codigoFactura: ['', Validators.required],
      cedula: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      fechaEmision: ['', Validators.required],
      usuarioId: ['', Validators.required],
      detalleFactura: this.fb.group({
        cantidad: ['', Validators.required],
        subtotal: ['', Validators.required],
        total: ['', Validators.required],
        detalle: ['', Validators.required],
        iva: ['', Validators.required],
        matriculaId: ['', Validators.required]
      })
    });
  }

  ngOnInit(): void {
    this.facturaId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id')! : null;
    if (this.facturaId) {
      this.cargarFactura();
    }
    this.cargarMatriculas(); // Carga las matrículas disponibles
  }

  cargarFactura(): void {
    this.cabeceraFacturaService.getById(this.facturaId!).subscribe(
      data => this.facturaForm.patchValue(data),
      error => console.error('Error al cargar la factura', error)
    );
  }

  cargarMatriculas(): void {
    this.matriculaService.getAll().subscribe(
      data => this.matriculas = data,
      error => console.error('Error al cargar las matrículas', error)
    );
  }

  onSubmit(): void {
    if (this.facturaForm.valid) {
      const factura: CabeceraFactura = this.facturaForm.value;
      if (this.facturaId) {
        factura.id = this.facturaId;
        this.cabeceraFacturaService.update(factura).subscribe(
          () => this.router.navigate(['pagina/listarFactura']),
          error => console.error('Error al actualizar la factura', error)
        );
      } else {
        this.cabeceraFacturaService.save(factura).subscribe(
          () => this.router.navigate(['pagina/listarFactura']),
          error => console.error('Error al guardar la factura', error)
        );
      }
    }
  }

}
