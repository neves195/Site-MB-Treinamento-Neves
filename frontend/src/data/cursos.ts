import type { Curso } from '../types/curso';

export const cursos: Curso[] = [
  {
    id: 1,
    categoria: 'moveis',
    nome: 'Operador de Empilhadeira',
    nr: 'NR-11',
    cargaHoraria: '16h',
    descricaoCurta: 'Operação segura, inspeção e movimentação de cargas.',
    descricaoLonga:
      'Formação completa para operadores de empilhadeira: inspeção pré-operacional, estabilidade de carga e prática supervisionada.',
    icone: 'empilhadeira.svg',
    ativo: true,
    conteudoProgramatico: [
      'Legislação e a Norma Regulamentadora NR-11',
      'Tipos de empilhadeira e seus componentes',
      'Inspeção pré-operacional do equipamento',
      'Estabilidade e capacidade de carga',
      'Práticas seguras de operação e circulação',
      'Prática supervisionada no equipamento',
    ],
  },
  {
    id: 2,
    categoria: 'industriais',
    nome: 'Operador de Ponte Rolante',
    nr: 'NR-11',
    cargaHoraria: '16h',
    descricaoCurta: 'Comando, cabos, acessórios e movimentação interna.',
    descricaoLonga:
      'Inspeção de cabos e acessórios de içamento, comandos e movimentação de cargas em ambiente fabril.',
    icone: 'ponte-rolante.svg',
    ativo: true,
    conteudoProgramatico: [
      'Legislação e a Norma Regulamentadora NR-11',
      'Componentes e comandos da ponte rolante',
      'Cabos, ganchos e acessórios de içamento',
      'Movimentação segura de cargas',
      'Sinalização e comunicação padronizada',
      'Procedimentos de emergência',
    ],
  },
  {
    id: 3,
    categoria: 'nrs',
    nome: 'NR-35 - Trabalho em Altura',
    nr: 'NR-35',
    cargaHoraria: '8h',
    descricaoCurta: 'Análise de riscos, EPIs e sistemas de ancoragem.',
    descricaoLonga:
      'Trabalho em altura conforme a NR-35: permissão de trabalho, análise de risco, cinturão, talabarte e resgate.',
    icone: 'trabalho-altura.svg',
    ativo: true,
    conteudoProgramatico: [
      'A Norma Regulamentadora NR-35 e responsabilidades',
      'Análise de risco e permissão de trabalho',
      'EPIs para trabalho em altura',
      'Sistemas e pontos de ancoragem',
      'Cinturão e talabarte: uso e inspeção',
      'Noções de resgate e primeiros socorros',
    ],
  },
];