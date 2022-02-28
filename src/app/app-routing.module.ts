import { ProjetosComponent } from './projetos/projetos.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'contatos', component: ContatoComponent},
  { path: 'habilidade', component: HabilidadesComponent},
  { path: 'projeto', component: ProjetosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
