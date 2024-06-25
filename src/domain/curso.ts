export class Curso {
  id: number;
  descripcion: string;
  docenteId?: number;
  anioLectivoId?: number;

  constructor(init?: Partial<Curso>) {
    this.id = init?.id ?? 0;
    this.descripcion = init?.descripcion ?? '';
    this.docenteId = init?.docenteId;
    this.anioLectivoId = init?.anioLectivoId;
  }
}
