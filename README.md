# MB Consultoria e Treinamento Neves — Site Institucional

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

Site institucional (vitrine) da **MB Consultoria e Treinamento Neves**, empresa de
**segurança do trabalho** especializada em treinamentos de Normas Regulamentadoras (NRs)
e operação de máquinas pesadas.

> **"Segurança do trabalho sob controle."**

---

## 📖 Sobre o projeto

A MB Consultoria e Treinamento Neves oferece **treinamentos** (NRs e operação de máquinas
como empilhadeira, retroescavadeira, guindaste, munck e ponte rolante) e **consultoria
empresarial** em segurança do trabalho.

O objetivo do site é servir como uma **vitrine digital**: apresentar os cursos, transmitir
credibilidade e facilitar o contato de empresas e alunos — com foco em experiência do
usuário, responsividade e segurança.

Este é o **segundo projeto** do autor, desenvolvido como aprendizado prático durante a
graduação em Sistemas de Informação. Toda a engenharia do sistema foi planejada **antes**
da implementação (requisitos, arquitetura, modelo de dados e plano de segurança) — veja a
pasta [`docs/`](./docs).

## ✨ Funcionalidades

- 🎨 Vitrine responsiva (mobile-first), com tema escuro
- 🏠 Hero de apresentação com chamadas para ação
- 🧰 Seção de serviços (treinamentos e consultoria)
- 📚 Catálogo de cursos com cards
- 💬 Botão de **WhatsApp com mensagem personalizada por curso**
- 📋 **Conteúdo programático** (ementa) expansível em cada curso
- 🎓 Destaque para "certificado emitido na hora"
- 🎬 Animações suaves de revelação ao rolar a página
- ♿ Cuidados de acessibilidade (contraste, `prefers-reduced-motion`)

## 🛠️ Tecnologias

- **React 19** + **TypeScript** — interface tipada e baseada em componentes
- **Vite** — build e servidor de desenvolvimento
- **CSS** — Flexbox, Grid, variáveis (design tokens) e layout responsivo

## 🚀 Como rodar o projeto

**Pré-requisitos:** [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Entre na pasta do frontend
cd frontend

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

O site abre em `http://localhost:5173`.

Outros comandos:

```bash
npm run build     # gera a versão final otimizada
npm run preview   # pré-visualiza a versão de produção
npm run lint      # verifica a qualidade do código
```

## 📁 Estrutura do projeto

```
site-mb-consultoria/
├── docs/                  # Documento de engenharia do sistema
└── frontend/
    └── src/
        ├── components/    # Componentes (Header, Hero, CursoCard, ...)
        ├── data/          # Dados dos cursos (temporário, até a Fase 2)
        ├── types/         # Tipos TypeScript (interface Curso)
        ├── App.tsx        # Componente raiz
        ├── main.tsx       # Ponto de entrada do React
        └── index.css      # Estilos globais e design tokens
```

## 🗺️ Roadmap

- [x] **Fase 1 — Vitrine (frontend)**: layout, catálogo, contato e animações
- [ ] Dados reais (WhatsApp, catálogo completo, fotos das turmas)
- [ ] Galeria de turmas (prova social)
- [ ] **Fase 2 — Backend dinâmico**: API em **Java + Spring Boot**, banco
  **PostgreSQL** e painel administrativo com login para gerenciar os cursos
- [ ] Publicação (deploy)

## 👤 Autor

**João Pedro das Neves** — estudante de Sistemas de Informação.

---

> Projeto em desenvolvimento contínuo, como parte de uma jornada de aprendizado. 🚀
