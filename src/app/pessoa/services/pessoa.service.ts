import { Injectable } from '@angular/core';

import { Pessoa } from '../../shared/models/pessoa.model';

const LS_CHAVE: string = 'pessoas';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor() {}

  listaTodos(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE];
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserir(pessoa: Pessoa): void {
    const pessoas = this.listaTodos();

    pessoa.id = new Date().getTime();
    pessoas.push(pessoa);

    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  buscarPorId(id: number): Pessoa | undefined {
    const pessoas: Pessoa[] = this.listaTodos();
    return pessoas.find((pessoa) => pessoa.id === id);
  }

  atualizar(pessoa: Pessoa): void {
    const pessoas: Pessoa[] = this.listaTodos();
    pessoas.forEach((obj, index, objs) => {
      if (pessoa.id === obj.id) {
        objs[index] = pessoa;
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
