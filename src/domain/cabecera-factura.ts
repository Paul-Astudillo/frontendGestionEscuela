import { DetalleFactura } from './detalle-factura';

export class CabeceraFactura {
  id: number;
  codigoFactura: number;
  cedula: string;
  direccion: string;
  telefono: string;
  fechaEmision: string; // Usamos string para fechas
  detalleFactura: DetalleFactura;
  usuarioId: number;

  constructor(init?: Partial<CabeceraFactura>) {
    this.id = init?.id ?? 0;
    this.codigoFactura = init?.codigoFactura ?? 0;
    this.cedula = init?.cedula ?? '';
    this.direccion = init?.direccion ?? '';
    this.telefono = init?.telefono ?? '';
    this.fechaEmision = init?.fechaEmision ?? '';
    this.detalleFactura = init?.detalleFactura ?? new DetalleFactura();
    this.usuarioId = init?.usuarioId ?? 0;
  }
}
