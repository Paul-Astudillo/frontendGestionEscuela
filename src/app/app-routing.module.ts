import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarRepresentantesComponent } from './pages/listar-representantes/listar-representantes.component';
import { ListarAlumnosComponent } from './pages/listar-alumnos/listar-alumnos.component';
import { ListarCursosComponent } from './pages/listar-cursos/listar-cursos.component';
import { ListarDocentesComponent } from './pages/listar-docentes/listar-docentes.component';
import { ListarAnioLectivoComponent } from './pages/listar-anio-lectivo/listar-anio-lectivo.component';
import { ListarMatriculasComponent } from './pages/listar-matriculas/listar-matriculas.component';
import { FormularioRepresentanteComponent } from './pages/formulario-representante/formulario-representante.component';
import { FormularioAnioLectivoComponent } from './pages/formulario-anio-lectivo/formulario-anio-lectivo.component';
import { FormularioAlumnoComponent } from './pages/formulario-alumno/formulario-alumno.component';
import { FormularioDocenteComponent } from './pages/formulario-docente/formulario-docente.component';
import { FormularioCursoComponent } from './pages/formulario-curso/formulario-curso.component';
import { ListarUsuarioComponent } from './pages/listar-usuario/listar-usuario.component';
import { ListarRolComponent } from './pages/listar-rol/listar-rol.component';
import { FormularioRolComponent } from './pages/formulario-rol/formulario-rol.component';
import { FormularioUsuarioComponent } from './pages/formulario-usuario/formulario-usuario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { FormularioMatriculaComponent } from './pages/formulario-matricula/formulario-matricula.component';
import { ListarFacturaComponent } from './pages/listar-factura/listar-factura.component';
import { FormularioFacturaComponent } from './pages/formulario-factura/formulario-factura.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'pagina/listaRepresentante', component: ListarRepresentantesComponent },
  { path: 'pagina/listaAlumno', component: ListarAlumnosComponent },
  { path: 'pagina/listaCurso', component: ListarCursosComponent },
  { path: 'pagina/listaDocente', component: ListarDocentesComponent },
  { path: 'pagina/listaAnioLectivo', component: ListarAnioLectivoComponent },
  { path: 'pagina/listaMatricula', component: ListarMatriculasComponent },
  { path: 'pagina/registrarRepresentante', component: FormularioRepresentanteComponent },
  { path: 'pagina/registrarRepresentante/:id', component: FormularioRepresentanteComponent },  // Ruta para edición
  { path: 'pagina/registrarAniolectivo', component: FormularioAnioLectivoComponent },
  { path: 'pagina/registrarAniolectivo/:id', component: FormularioAnioLectivoComponent },//edicion
  { path: 'pagina/registrarAlumno', component: FormularioAlumnoComponent },
  { path: 'pagina/registrarAlumno/:id', component: FormularioAlumnoComponent },//edicion
  { path: 'pagina/registrarDocente', component: FormularioDocenteComponent },
  { path: 'pagina/registrarDocente/:id', component: FormularioDocenteComponent },//edicion
  { path: 'pagina/registrarCurso', component: FormularioCursoComponent },
  { path: 'pagina/registrarCurso/:id', component: FormularioCursoComponent },///edicion
  { path: 'pagina/listaUsuario', component: ListarUsuarioComponent },
  { path: 'pagina/listaRol', component: ListarRolComponent },
  { path: 'pagina/registrarRol', component: FormularioRolComponent },
  { path: 'pagina/registrarUsuario', component: FormularioUsuarioComponent },
  { path: 'pagina/registrarMatricula', component: FormularioMatriculaComponent },
  { path: 'pagina/listarFactura', component: ListarFacturaComponent },
  { path: 'pagina/registrarFactura', component: FormularioFacturaComponent },
  { path: 'pagina/login', component: LoginComponent },


  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent }, 
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
