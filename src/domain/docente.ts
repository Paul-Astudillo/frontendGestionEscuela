export class Docente {
  id: number;
  cedula: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  especialidad: string;
  cursoId?: number;

  constructor(init?: Partial<Docente>) {
    this.id = init?.id ?? 0;
    this.cedula = init?.cedula ?? '';
    this.nombre = init?.nombre ?? '';
    this.apellido = init?.apellido ?? '';
    this.email = init?.email ?? '';
    this.telefono = init?.telefono ?? '';
    this.especialidad = init?.especialidad ?? '';
    this.cursoId = init?.cursoId;
  }
}
