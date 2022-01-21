import { nome as nome2, sobrenome as sobrenome2, idade, Pessoa } from './modulo1.js'
import * as MeuModulo from './modulo1.js'

const nome = 'João'

const pessoa = new Pessoa(nome2, sobrenome2)

console.log(nome, sobrenome2, idade, pessoa)
console.log(MeuModulo)

//sempre que importar sem chaves estará sendo importado o default
import qualquerCoisa from './modulo2.js' // neste ponto o javascript importará o export dafault. NÃO PRECISA DE CHAVES {} para definir oque esta sendo importado pois já tem o default
console.log(qualquerCoisa) // que no caso do modulo2 era a função soma que passa a se chamar qualquerCoisa

import qualquerConstante from './modulo3.js' //importando constante como default. Só muda na exportação
console.log(qualquerConstante)

import qualquerConstante2, { sobrenome as sobrenome3, idade as idade3} from './modulo3.js' //é possivel importar o default e as constantes tambem
console.log(qualquerConstante2)