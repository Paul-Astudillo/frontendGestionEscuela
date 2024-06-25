import { Curso } from './curso';
import { AnioLectivo } from './aniolectivo';
import { Alumno } from './alumno';

export class Matricula {
  id: number;
  nombre: string;
  curso: Curso;
  anioLectivo: AnioLectivo;
  alumno: Alumno;
  matricula: number;

  constructor(init?: Partial<Matricula>) {
    this.id = init?.id ?? 0;
    this.nombre = init?.nombre ?? '';
    this.curso = init?.curso ?? new Curso();
    this.anioLectivo = init?.anioLectivo ?? new AnioLectivo();
    this.alumno = init?.alumno ?? new Alumno();
    this.matricula = init?.matricula ?? 0;
  }
}
