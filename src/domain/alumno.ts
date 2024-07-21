import { Representante } from "./representante";

export class Alumno {
  id: number;
  nombre: string;
  apellido: string;
  cedula: string;
  telefono: string;
  email: string;
  sexo: string;
  fechaN: Date;
  direccion: string;
  representante?: Representante;
  representanteId?: number;

  constructor(init?: Partial<Alumno>) {
    this.id = init?.id ?? 0;
    this.nombre = init?.nombre ?? '';
    this.apellido = init?.apellido ?? '';
    this.cedula = init?.cedula ?? '';
    this.telefono = init?.telefono ?? '';
    this.email = init?.email ?? '';
    this.sexo = init?.sexo ?? '';
    this.fechaN = init?.fechaN ?? new Date();
    this.direccion = init?.direccion ?? '';
    this.representante = init?.representante;
    this.representanteId = init?.representanteId;
    Object.assign(this, init);
  }
}
