import { Usuario } from "./usuario";

export class Rol {
    id: number;
    descripcion: string;
    usuarios?: Usuario[];
  
    constructor(init?: Partial<Rol>) {
      this.id = init?.id ?? 0;
      this.descripcion = init?.descripcion ?? '';
      this.usuarios = init?.usuarios ?? [];
    }
  }