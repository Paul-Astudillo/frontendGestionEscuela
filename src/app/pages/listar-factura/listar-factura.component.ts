import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CabeceraFacturaService } from 'src/app/service/cabecera-factura.service';
import { DetalleFacturaService } from 'src/app/service/detalle-factura.service';
import { CabeceraFactura } from 'src/domain/cabecera-factura';
import { DetalleFactura } from 'src/domain/detalle-factura';

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.component.html',
  styleUrls: ['./listar-factura.component.scss']
})
export class ListarFacturaComponent {
  facturas: CabeceraFactura[] = [];
  facturaSeleccionada: CabeceraFactura | null = null;
  detallesFactura: DetalleFactura[] = [];

  constructor(
    private cabeceraFacturaService: CabeceraFacturaService,
    private detalleFacturaService: DetalleFacturaService
  ) { }

  ngOnInit(): void {
    this.cargarFacturas();
  }

  cargarFacturas(): void {
    this.cabeceraFacturaService.getAll().subscribe(
      data => this.facturas = data,
      error => console.error('Error al cargar las facturas', error)
    );
  }

  seleccionarFactura(id: number): void {
    this.cabeceraFacturaService.getById(id).subscribe(
      data => this.facturaSeleccionada = data,
      error => console.error('Error al seleccionar la factura', error)
    );
    this.detalleFacturaService.getByFacturaId(id).subscribe(
      data => this.detallesFactura = data,
      error => console.error('Error al cargar los detalles de la factura', error)
    );
  }

  editarFactura(id: number, event: Event): void {
    event.stopPropagation();
    // Aquí va el código para editar la factura
  }

  eliminarFactura(id: number, event: Event): void {
    event.stopPropagation();
    // Aquí va el código para eliminar la factura
  }
}