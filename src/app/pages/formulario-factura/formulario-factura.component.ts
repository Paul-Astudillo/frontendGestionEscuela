import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CabeceraFacturaService } from 'src/app/service/cabecera-factura.service';
import { MatriculaService } from 'src/app/service/matricula.service';
import { CabeceraFactura } from 'src/domain/cabecera-factura';
import { Matricula } from 'src/domain/matricula';

@Component({
  selector: 'app-formulario-factura',
  templateUrl: './formulario-factura.component.html',
  styleUrls: ['./formulario-factura.component.scss']
})
export class FormularioFacturaComponent implements OnInit {
  facturaForm: FormGroup;
  facturaId: number | null = null;
  matriculas: Matricula[] = []; // Añade una propiedad para las matrículas
  user: string | null = null;
  constructor(
    private authService: AuthService,
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
    this.user=this.authService.getCurrentUserId();
    this.facturaForm.get('usuarioId')?.setValue(this.user);
    this.facturaId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id')! : null;
    if (this.facturaId) {
      this.cargarFactura();
    } else {
      this.setFechaEmisionYcodigoFactura();
    }
    this.cargarMatriculas(); // Carga las matrículas disponibles
    this.onChanges();
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

  setFechaEmisionYcodigoFactura(): void {
    const fechaEmision = new Date().toISOString().split('T')[0];
    const codigoFactura = Math.floor(Math.random() * 100000000).toString().padStart(6, '0');
    this.facturaForm.get('fechaEmision')?.setValue(fechaEmision);
    this.facturaForm.get('codigoFactura')?.setValue(codigoFactura);
  }

  onChanges(): void {
    this.facturaForm.get('detalleFactura')?.get('subtotal')?.valueChanges.subscribe(val => {
      const subtotal = parseFloat(val);
      const iva = subtotal * 0.15;
      const total = subtotal + iva;
      this.facturaForm.get('detalleFactura')?.get('iva')?.setValue(iva.toFixed(2));
      this.facturaForm.get('detalleFactura')?.get('total')?.setValue(total.toFixed(2));
    });
  }

  onSubmit(): void {
    if (this.facturaForm.valid) {
      const factura: CabeceraFactura = this.facturaForm.getRawValue();
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
