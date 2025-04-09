import { Component } from '@angular/core';
import { AlunoService } from '../alunos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos-cadastro',
  templateUrl: './alunos-cadastro.component.html',
})
export class AlunosCadastroComponent {
  aluno = {
    nome: '',
    idade: null,
    curso: ''
  };

  constructor(private alunoService: AlunoService) {}

  cadastrar() {
    this.alunoService.adicionarAluno({ ...this.aluno });
    alert('Aluno cadastrado!');
    this.aluno = { nome: '', idade: null, curso: '' };
    // this.router.navigate(['/alunos']); // redireciona para a lista após salvar
  }
}
