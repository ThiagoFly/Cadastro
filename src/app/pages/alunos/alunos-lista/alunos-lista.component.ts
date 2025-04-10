import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/pages/core/models/aluno.model';
import { AlunoService } from 'src/app/pages/alunos/alunos.service';

@Component({
  selector: 'app-alunos-lista',
  templateUrl: './alunos-lista.component.html',
  styleUrls: ['./alunos-lista.component.css']
})
export class AlunosListaComponent implements OnInit {
  alunos: Aluno[] = [];
  alunosFiltrados: Aluno[] = [];
  filtroNome: string = '';
  filtroCurso: string = '';

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos(): void {
    this.alunos = this.alunoService.getAlunos();
    this.alunosFiltrados = [...this.alunos];
  }

  filtrarAlunos(): void {
    const nome = this.filtroNome.toLowerCase();
    const curso = this.filtroCurso.toLowerCase();

    this.alunosFiltrados = this.alunos.filter(aluno =>
      aluno.nome.toLowerCase().includes(nome) &&
      aluno.curso.toLowerCase().includes(curso)
    );
  }

  excluirAluno(aluno: Aluno): void {
    this.alunos = this.alunos.filter(a => a.id !== aluno.id);
    this.alunosFiltrados = [...this.alunos];
    // Se quiser atualizar no serviço também:
    // this.alunoService.setAlunos(this.alunos); <-- REMOVA essa linha
  }
}
