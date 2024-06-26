import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './templete/titulo/titulo.component';
import { MenuComponent } from './templete/menu/menu.component';
import { ListarRepresentantesComponent } from './pages/listar-representantes/listar-representantes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MenuComponent,
    ListarRepresentantesComponent,
    ListarAlumnosComponent,
    ListarCursosComponent,
    ListarDocentesComponent,
    ListarAnioLectivoComponent,
    ListarMatriculasComponent,
    FormularioRepresentanteComponent,
    FormularioAnioLectivoComponent,
    FormularioAlumnoComponent,
    FormularioDocenteComponent,
    FormularioCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
