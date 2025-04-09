import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
// {
//   path: 'disciplina',
//   loadChildren: () =>
//     import('./pages/disciplina/disciplina.module').then((m) => m.DisciplinaModule)
// }
// ];

const routes: Routes = [
  {
    path: 'disciplinas',
    loadChildren: () => import('./pages/disciplina/disciplina.module').then(m => m.DisciplinaModule)
  },
  {
    path: 'alunos',
    loadChildren: () => import('./pages/alunos/alunos.module').then(m => m.AlunosModule)
  },
  { path: '', redirectTo: 'disciplinas', pathMatch: 'full' },
  { path: '**', redirectTo: 'disciplinas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
