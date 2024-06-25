import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './templete/titulo/titulo.component';
import { MenuComponent } from './templete/menu/menu.component';
import { ListarRepresentantesComponent } from './pages/listar-representantes/listar-representantes.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MenuComponent,
    ListarRepresentantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
