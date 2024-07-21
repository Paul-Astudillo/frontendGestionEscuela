// src/domain/representante.ts
export class Representante {
  id: number;
  cedula:string;
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string;
  profesion: string;

  constructor(init?: Partial<Representante>) {
    this.id = init?.id ?? 0;
    this.cedula= init?.cedula ?? '';
    this.nombre = init?.nombre ?? '';
    this.apellido = init?.apellido ?? '';
    this.direccion = init?.direccion ?? '';
    this.telefono = init?.telefono ?? '';
    this.profesion = init?.profesion ?? '';
  }
}
