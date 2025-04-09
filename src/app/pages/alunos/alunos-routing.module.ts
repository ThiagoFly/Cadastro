import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosListaComponent } from './alunos-lista/alunos-lista.component';
import { AlunosCadastroComponent } from './alunos-cadastro/alunos-cadastro.component';

const routes: Routes = [
  { path: '', component: AlunosListaComponent },
  { path: 'cadastro', component: AlunosCadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }

