export class DetalleFactura {
  id: number;
  cantidad: number;
  subtotal: number;
  total: number;
  detalle: string;
  iva: number;
  matriculaId: number;

  constructor(init?: Partial<DetalleFactura>) {
    this.id = init?.id ?? 0;
    this.cantidad = init?.cantidad ?? 0;
    this.subtotal = init?.subtotal ?? 0;
    this.total = init?.total ?? 0;
    this.detalle = init?.detalle ?? '';
    this.iva = init?.iva ?? 0;
    this.matriculaId = init?.matriculaId ?? 0;
  }
}
