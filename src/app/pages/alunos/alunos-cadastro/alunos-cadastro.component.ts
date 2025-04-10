import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Aluno } from 'src/app/pages/core/models/aluno.model';
import { AlunoService } from '../alunos.service';

@Component({
  selector: 'app-alunos-cadastro',
  templateUrl: './alunos-cadastro.component.html',
  styleUrls: ['./alunos-cadastro.component.css']
})
export class AlunosCadastroComponent {
  aluno: Aluno = {
    id: 0,
    nome: '',
    idade: 0,
    curso: '',
    cpf: '',
    status: true,
    datacriacao: new Date(),
    dataalteracao: undefined,
    usucriacao: '',
    usualteracao: ''
  };

  cursos = [
    { label: 'Engenharia', value: 'Engenharia' },
    { label: 'Medicina', value: 'Medicina' },
    { label: 'Direito', value: 'Direito' },
    { label: 'Administração', value: 'Administração' },
    { label: 'Ciência da Computação', value: 'Ciência da Computação' }
  ];

  constructor(
    private router: Router,
    private messageService: MessageService,
    private alunoService: AlunoService
  ) {}

  cadastrar(form: NgForm) {
    if (form.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Preencha todos os campos obrigatórios.'
      });
      return;
    }

    this.aluno.datacriacao = new Date();
    this.alunoService.adicionarAluno(this.aluno);

    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Aluno cadastrado com sucesso!'
    });

    setTimeout(() => {
      this.router.navigate(['/alunos']);
    }, 1000);
  }

  voltar() {
    this.router.navigate(['/alunos']);
  }
}
