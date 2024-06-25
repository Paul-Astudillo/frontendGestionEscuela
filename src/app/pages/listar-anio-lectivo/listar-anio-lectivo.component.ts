import { Component } from '@angular/core';
import { AnioLectivoService } from 'src/app/service/aniolectivo.service';
import { AnioLectivo } from 'src/domain/aniolectivo';

@Component({
  selector: 'app-listar-anio-lectivo',
  templateUrl: './listar-anio-lectivo.component.html',
  styleUrls: ['./listar-anio-lectivo.component.scss']
})
export class ListarAnioLectivoComponent {
  aniosLectivos: AnioLectivo[] = [];

  constructor(private anioLectivoService: AnioLectivoService) { }

  ngOnInit(): void {
    this.obtenerAniosLectivos();
  }

  obtenerAniosLectivos(): void {
    this.anioLectivoService.getAll().subscribe(
      (data: AnioLectivo[]) => {
        this.aniosLectivos = data;
      },
      (error) => {
        console.error('Error al obtener los años lectivos', error);
      }
    );
  }
}
