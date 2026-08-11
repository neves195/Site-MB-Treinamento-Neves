# Documento de Engenharia do Sistema
## Site MB Consultoria e Treinamento Neves

> **Projeto:** Site institucional de divulgação (vitrine) com área administrativa de cadastro
> **Autor:** João Paulo Neves
> **Data:** 30/07/2026
> **Versão:** 1.0 (planejamento — pré-código)

---

## 1. Visão Geral e Objetivo

Construir o **site institucional da MB Consultoria e Treinamento Neves** para divulgar a
empresa e apresentar seus serviços. O site funciona como uma **vitrine**: atrai empresas e
alunos, mostra os cursos/treinamentos e gera contato via WhatsApp.

Numa segunda fase, o site ganha uma **área administrativa protegida por login**, onde o
responsável pode **cadastrar, editar e remover** cursos e **adicionar fotos** das turmas,
sem precisar mexer no código.

**Mensagem-chave do site:** *"Segurança do trabalho sob controle."*

---

## 2. Escopo

### Faz parte do sistema (dentro do escopo)
- Site vitrine público, responsivo e interativo.
- Catálogo de cursos organizado por categorias, com filtro e detalhes.
- Galeria de fotos das turmas (prova social).
- Destaque para "certificado emitido na hora".
- Contato principal via WhatsApp.
- Área administrativa (login) para cadastro de cursos e fotos.

### NÃO faz parte (fora do escopo, por enquanto)
- Venda de cursos on-line / pagamento pelo site.
- Emissão automática de certificados.
- Cadastro/login de alunos (só o admin tem acesso interno).

---

## 3. Público-Alvo

| Público | Necessidade |
|---------|-------------|
| **Empresas** | Capacitar equipes nas NRs; obter conformidade legal e documentação. |
| **Alunos (pessoa física)** | Fazer cursos de operação de máquinas e obter certificado. |
| **Administrador (você)** | Manter o catálogo e as fotos sempre atualizados. |

---

## 4. Requisitos Funcionais (o que o sistema FAZ)

| Código | Requisito |
|--------|-----------|
| RF01 | Exibir a página inicial (hero) com a proposta da empresa. |
| RF02 | Exibir os serviços (treinamentos e consultoria). |
| RF03 | Listar o catálogo de cursos, com filtro por categoria (móveis, industriais, NRs). |
| RF04 | Exibir os detalhes de cada curso (NR, carga horária, descrição). |
| RF05 | Exibir a galeria de fotos das turmas realizadas. |
| RF06 | Destacar que o certificado é emitido na hora. |
| RF07 | Oferecer contato via WhatsApp em pontos estratégicos. |
| RF08 | Permitir que o administrador faça login em área protegida. |
| RF09 | Permitir ao admin CADASTRAR, EDITAR, LISTAR e REMOVER cursos (CRUD). |
| RF10 | Permitir ao admin ADICIONAR e REMOVER fotos das turmas. |

---

## 5. Requisitos Não-Funcionais (COMO o sistema deve ser)

| Código | Requisito |
|--------|-----------|
| RNF01 | **Responsividade:** funcionar bem em celular, tablet, notebook e PC (mobile-first). |
| RNF02 | **Segurança:** defesa em camadas; site público, exposto a ataques (ver seção 9). |
| RNF03 | **Desempenho:** carregamento rápido, inclusive em conexão móvel (4G). |
| RNF04 | **Acessibilidade:** bom contraste, navegação por teclado, textos alternativos. |
| RNF05 | **Interatividade:** micro-interações e animações sutis (site não-genérico). |
| RNF06 | **Manutenibilidade:** código organizado em camadas, fácil de evoluir. |

---

## 6. Arquitetura do Sistema

Arquitetura **desacoplada** em 3 camadas + armazenamento de imagens:

```
         PÚBLICO (visitante)                 ADMIN (você)
                 │                                │
                 ▼                                ▼
     ┌───────────────────────────────────────────────────┐
     │  FRONTEND — React (SPA)                            │
     │  • Vitrine pública  • Painel admin (só logado)     │
     └───────────────────────────────────────────────────┘
                 │  HTTPS (JSON via API REST)
                 ▼
     ┌───────────────────────────────────────────────────┐
     │  BACKEND — Spring Boot (API REST)  [Java]          │
     │  • Spring Security (login/permissões)              │
     │  • Regras de negócio + validações                  │
     └───────────────────────────────────────────────────┘
           │                              │
           ▼                              ▼
   ┌─────────────────┐          ┌──────────────────────────┐
   │ BANCO PostgreSQL │          │ ARMAZENAMENTO DE IMAGENS │
   │ cursos, turmas,  │          │ (ex.: Cloudinary)        │
   │ usuário admin    │          │ guarda a foto; banco     │
   └─────────────────┘          │ guarda só o link (URL)   │
                                └──────────────────────────┘
```

**Princípio de segurança:** o frontend **nunca** acessa o banco diretamente. Todo pedido passa
pelo backend (Spring Boot), que valida antes de tocar nos dados.

### 6.1 Área administrativa (rota protegida)

A área de cadastro **não** é um aplicativo separado: é uma **rota protegida dentro do
mesmo frontend**, liberada só após o login. O público acessa as páginas abertas; o
administrador acessa o painel restrito.

```
PÚBLICO (qualquer um)             RESTRITO (só com login)
   /          (home)                 /login   -> tela de entrada
   /cursos    (catálogo)             /painel  -> CRUD de cursos
   /turmas    (galeria)                         + upload de fotos das turmas
   /contato
```

> **Atenção (conceito de segurança):** esconder a rota no frontend NÃO é proteção — a
> segurança real está no **backend**. O Spring Security recusa qualquer pedido à API que
> não traga um token (JWT) válido. Mesmo que alguém descubra o endereço `/painel`, a tela
> vem vazia e nenhuma ação é executada sem autenticação. A "porta" pode ser de vidro; o que
> segura é a "fechadura" (backend).

---

## 7. Stack Tecnológica

| Camada | Tecnologia | Por quê |
|--------|------------|---------|
| **Frontend** | React + **TypeScript** | Protótipo pronto; tipos alinham com a base tipada do autor (Java/C#) e ajudam a entender o código em tempo real. |
| **Backend** | Java + **Spring Boot** | Alinhado à base do João; robusto e seguro. |
| **Segurança** | **Spring Security** + JWT | Autenticação madura e testada. |
| **Banco de dados** | **PostgreSQL** | Relacional, robusto, gratuito, combina com Spring. |
| **Acesso a dados** | Spring Data JPA | Evita SQL injection; produtivo. |
| **Imagens** | Serviço externo (ex.: Cloudinary) | Banco não deve guardar arquivos pesados. |
| **Hospedagem** | *A definir* | Existem opções gratuitas para estudante. |

---

## 8. Modelo de Dados

### Entidade: CURSO
| Campo | Tipo | Observação |
|-------|------|------------|
| id | Long | Chave primária |
| categoria | String | "moveis", "industriais", "nrs" |
| nome | String | Ex.: "Operador de Empilhadeira" |
| nr | String | Ex.: "NR-11" |
| carga_horaria | String | Ex.: "16h a 20h" |
| descricao_curta | String | Resumo de 1 linha |
| descricao_longa | Text | Descrição completa |
| icone | String | Emoji/ícone |
| ativo | Boolean | Mostrar ou ocultar no site |

### Entidade: TURMA (foto)
| Campo | Tipo | Observação |
|-------|------|------------|
| id | Long | Chave primária |
| curso_id | Long (FK) | Relaciona com CURSO (opcional) |
| legenda | String | Ex.: "Turma de Empilhadeira" |
| local | String | Ex.: "Pátio logístico" |
| data | Date | Data da turma |
| imagem_url | String | Link da foto no armazenamento |

### Entidade: USUARIO_ADMIN
| Campo | Tipo | Observação |
|-------|------|------------|
| id | Long | Chave primária |
| email | String | Login |
| senha_hash | String | Senha criptografada (BCrypt) — **nunca** texto puro |

**Relacionamento:** um CURSO pode ter várias TURMAS (1 : N).

---

## 9. Plano de Segurança (Defesa em Camadas)

> ⚠️ Nenhum sistema é 100% seguro. O objetivo é empilhar proteções para tornar o ataque
> inviável. Todas as camadas abaixo vêm de **frameworks maduros** — nada de segurança "na mão".

| Camada | Protege contra | Como |
|--------|----------------|------|
| HTTPS | Interceptação de dados | Certificado SSL (cadeado no navegador) |
| Spring Security + login | Acesso não autorizado | Só admin logado acessa o cadastro |
| Hash de senha (BCrypt) | Vazamento de senhas | Senha nunca é armazenada em texto puro |
| Token JWT | Falsificação de sessão | "Crachá" temporário e assinado |
| Validação de entrada | Dados maliciosos | Backend recusa dados fora do formato |
| Spring Data JPA | **SQL Injection** | Consultas parametrizadas, sem concatenar texto |
| React (escape de HTML) | **XSS** | Neutraliza scripts injetados por padrão |
| CORS | Abuso da API por terceiros | Só o site oficial chama a API |
| Rate limiting | Força bruta no login | Limita tentativas por tempo |
| Princípio do menor privilégio | Escalada de acesso | Cada parte só acessa o necessário |

---

## 10. Fases do Projeto (Roadmap)

### Fase 1 — Vitrine (frontend)
- Adaptar o protótipo React ao gosto final.
- Inserir dados reais (WhatsApp, fotos, conferir NRs e cargas horárias).
- Publicar o site estático (catálogo ainda "fixo").

### Fase 2 — Backend e Cadastro (dinâmico)
- Criar a API em Spring Boot + PostgreSQL.
- Implementar login seguro (Spring Security + JWT).
- Implementar o CRUD de cursos e o gerenciamento de fotos.
- Conectar o React à API.

### Fase 3 — Publicação e Segurança final
- Configurar HTTPS, CORS, rate limiting.
- Testes de segurança e responsividade.
- Deploy (hospedagem) e monitoramento.

---

## 11. Pendências (dados a coletar)
- [ ] Número/link oficial do WhatsApp.
- [ ] Arquivo da logo em alta e código exato da cor da marca.
- [ ] Fotos reais das turmas.
- [ ] Conferir/confirmar NRs e cargas horárias de cada curso.
- [ ] Definir hospedagem.

---

## 12. Glossário (para consulta)

- **Frontend:** a parte visível do site (o que o visitante vê).
- **Backend:** o "cérebro" nos bastidores, que processa e valida os pedidos.
- **API REST:** a "linguagem" pela qual frontend e backend conversam (via JSON).
- **SPA (Single-Page Application):** site que carrega uma vez e atualiza sem recarregar a página.
- **CRUD:** Create, Read, Update, Delete — as 4 operações básicas sobre os dados.
- **JWT:** token (crachá digital) que prova que o usuário está logado.
- **Hash (BCrypt):** transformação irreversível da senha, para guardá-la com segurança.
- **SQL Injection / XSS / CSRF:** ataques web comuns que o plano de segurança previne.
- **ORM / JPA:** ferramenta que liga o código Java às tabelas do banco de dados.
- **TypeScript:** JavaScript com sistema de tipos — declara o tipo de cada dado (número, texto...), como em Java/C#, e avisa erros enquanto você escreve.
