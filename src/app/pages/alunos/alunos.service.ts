import { Injectable } from '@angular/core';
import { ALUNOS } from './mock-alunos';
import { Aluno } from 'src/app/pages/core/models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos: Aluno[] = [...ALUNOS];

  // Retorna todos os alunos
  getAlunos(): Aluno[] {
    return [...this.alunos]; // retorna uma cópia para evitar alterações diretas
  }

  // Adiciona um novo aluno
  adicionarAluno(aluno: Aluno): void {
    aluno.id = this.alunos.length > 0 ? Math.max(...this.alunos.map(a => a.id)) + 1 : 1;
    this.alunos.push(aluno);
  }

  // Atualiza a lista de alunos (por exemplo, após uma exclusão)
  setAlunos(novosAlunos: Aluno[]): void {
    this.alunos = [...novosAlunos];
  }
}
