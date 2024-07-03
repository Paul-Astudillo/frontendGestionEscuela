// src/domain/curso.ts
export interface Docente {
  id: number;
  nombre: string;
  apellido: string;
  // otros campos...
}

export interface AnioLectivo {
  id: number;
  descripcion: string;
}

export class Curso {
  id: number;
  descripcion: string;
  docenteId?: number;
  anioLectivoId?: number;
  docente?: Docente;
  anioLectivo?: AnioLectivo;

  constructor(init?: Partial<Curso>) {
    this.id = init?.id ?? 0;
    this.descripcion = init?.descripcion ?? '';
    this.docenteId = init?.docenteId;
    this.anioLectivoId = init?.anioLectivoId;
    this.docente = init?.docente;
    this.anioLectivo = init?.anioLectivo;
  }
}
