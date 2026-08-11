export type Categoria = 'moveis' | 'industriais' | 'nrs';

export interface Curso {
    id: number;
    categoria: Categoria;
    nome: string;
    nr: string;
    cargaHoraria: string | number;
    descricaoCurta: string;
    descricaoLonga: string;
    icone: string;
    ativo: boolean;
    conteudoProgramatico: string[];
}
