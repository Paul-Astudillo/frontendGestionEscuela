import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarRepresentantesComponent } from './pages/listar-representantes/listar-representantes.component';

const routes: Routes = [
  {path:"pagina/listaRepresentante", component:ListarRepresentantesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
