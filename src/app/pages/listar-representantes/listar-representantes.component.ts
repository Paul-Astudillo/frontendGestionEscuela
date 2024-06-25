import { Component, OnInit } from '@angular/core';
import { RepresentanteService } from 'src/app/service/representante.service';


@Component({
  selector: 'app-listar-representantes',
  templateUrl: './listar-representantes.component.html',
  styleUrls: ['./listar-representantes.component.scss']
})
export class ListarRepresentantesComponent implements OnInit {
  representantes: any[] = [];

  constructor(private representanteService: RepresentanteService) { }

  ngOnInit(): void {
    this.obtenerRepresentantes();
  }

  obtenerRepresentantes(): void {
    this.representanteService.getRepresentantes()
      .subscribe(data => {
        this.representantes = data;
      });
  }
}
