import { Injectable } from '@angular/core';

import { Pessoa } from '../../shared/models/pessoa.model';

const LS_CHAVE: string = 'pessoas';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  constructor() {}
}
