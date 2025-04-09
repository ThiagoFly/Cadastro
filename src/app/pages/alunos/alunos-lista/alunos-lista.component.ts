import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../alunos.service';
import { ConfirmationService, MessageService } from 'primeng/api';

interface Aluno {
  id: number;
  nome: string;
  idade: number;
  curso: string;
}

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class AlunosListaComponent implements OnInit {
  alunos: Aluno[] = [];
  alunosFiltrados: Aluno[] = [];

  filtroNome: string = '';
  filtroCurso: string = '';

  constructor(
    private alunoService: AlunoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.alunos = this.alunoService.getAlunos();
    this.alunosFiltrados = [...this.alunos];
  }

  filtrarAlunos(): void {
    this.alunosFiltrados = this.alunos.filter(aluno =>
      aluno.nome.toLowerCase().includes(this.filtroNome.toLowerCase()) &&
      aluno.curso.toLowerCase().includes(this.filtroCurso.toLowerCase())
    );
  }

  excluirAluno(aluno: Aluno): void {
    this.confirmationService.confirm({
      message: `Deseja realmente excluir o aluno ${aluno.nome}?`,
      header: 'Confirmar Exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.alunos = this.alunos.filter(a => a.id !== aluno.id);
        this.filtrarAlunos();
        this.messageService.add({
          severity: 'success',
          summary: 'Excluído',
          detail: `Aluno ${aluno.nome} removido com sucesso.`
        });
      }
    });
  }
}
