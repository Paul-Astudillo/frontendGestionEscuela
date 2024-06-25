import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarRepresentantesComponent } from './pages/listar-representantes/listar-representantes.component';
import { ListarAlumnosComponent } from './pages/listar-alumnos/listar-alumnos.component';
import { ListarCursosComponent } from './pages/listar-cursos/listar-cursos.component';
import { ListarDocentesComponent } from './pages/listar-docentes/listar-docentes.component';
import { ListarAnioLectivoComponent } from './pages/listar-anio-lectivo/listar-anio-lectivo.component';
import { ListarMatriculasComponent } from './pages/listar-matriculas/listar-matriculas.component';
import { FormularioRepresentanteComponent } from './pages/formulario-representante/formulario-representante.component';

const routes: Routes = [
  { path: 'pagina/listaRepresentante', component: ListarRepresentantesComponent },
  { path: 'pagina/listaAlumno', component: ListarAlumnosComponent },
  { path: 'pagina/listaCurso', component: ListarCursosComponent },
  { path: 'pagina/listaDocente', component: ListarDocentesComponent },
  { path: 'pagina/listaAnioLectivo', component: ListarAnioLectivoComponent },
  { path: 'pagina/listaMatricula', component: ListarMatriculasComponent },
  { path: 'pagina/registrarRepresentante', component: FormularioRepresentanteComponent }



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
