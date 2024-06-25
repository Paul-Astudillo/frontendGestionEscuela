export class AnioLectivo {
  id: number;
  descripcion: string;

  constructor(init?: Partial<AnioLectivo>) {
    this.id = init?.id ?? 0;
    this.descripcion = init?.descripcion ?? '';
  }
}
