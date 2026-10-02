export type Categoria = 'moveis' | 'industriais' | 'nrs';

export interface Curso {
    /** Slug único por categoria (ex.: "moveis-empilhadeira"). Nunca reutilizar
     * nem renumerar — evita colisão ao editar o arquivo em máquinas diferentes. */
    id: string;
    categoria: Categoria;
    nome: string;
    nr: string;
    cargaHoraria: string | number;
    descricaoCurta: string;
    descricaoLonga: string;
    icone: string;
    /** Caminho da foto da máquina/atividade do curso (ex.: "/cursos/empilhadeira.jpg").
     * Opcional: enquanto a foto real não é enviada, o card mostra um placeholder. */
    imagem?: string;
    ativo: boolean;
    conteudoProgramatico: string[];
}
