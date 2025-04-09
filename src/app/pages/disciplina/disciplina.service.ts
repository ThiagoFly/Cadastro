import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  disciplinaUrl: string = '';

  constructor(private http: HttpClient) {
    this.disciplinaUrl = 'https://67e4904f2ae442db76d4d454.mockapi.io/diciplina';
  }

  listar(): Promise<any> {
    return firstValueFrom(this.http.get(this.disciplinaUrl)).then(
      (response: any) => {
      return response;
      }
    );
  }
}
