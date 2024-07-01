import { Rol } from "./rol";

export class Usuario {
    id: number;
    usuario: string;
    password: string;
    estado: string;
    rol?: Rol;
    rolId?: number;
  
    constructor(init?: Partial<Usuario>) {
      this.id = init?.id ?? 0;
      this.usuario = init?.usuario ?? '';
      this.password = init?.password ?? '';
      this.estado = init?.estado ?? '';
      this.rol = init?.rol;
      this.rolId = init?.rolId;
    }
  }