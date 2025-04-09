import { Injectable } from '@angular/core';
import { ALUNOS } from './mock-alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private alunos = [...ALUNOS];

  getAlunos() {
    return this.alunos;
  }

  adicionarAluno(aluno: any) {
    aluno.id = this.alunos.length + 1;
    this.alunos.push(aluno);
  }
}