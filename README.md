
# Cadastro de Usuarios

Aplicacao web para cadastro, listagem e exclusao de usuarios. O projeto foi desenvolvido com React e Vite, utilizando rotas com React Router, requisicoes HTTP com Axios e estilos com styled-components.

## Funcionalidades

- Cadastro de usuarios com nome, idade e email.
- Listagem de usuarios cadastrados.
- Exclusao de usuarios com atualizacao imediata da interface.
- Navegacao entre tela de cadastro e tela de listagem.
- Avatar automatico para cada usuario usando DiceBear.
- Interface responsiva para desktop e dispositivos menores.

## Tecnologias

- React
- Vite
- React Router DOM
- Axios
- Styled-components
- ESLint

## Estrutura Principal

```txt
src/
  componets/
    Button/
    background/
  pages/
    Home/
    ListUsers/
  services/
    api.js
  styles/
    GlobalStyles.js
  routes.jsx
  main.jsx
```

## Rotas da Aplicacao

| Rota | Descricao |
| --- | --- |
| `/` | Tela de cadastro de usuarios |
| `/lista-de-usuarios` | Tela com a lista de usuarios cadastrados |

## API

A aplicacao consome uma API local configurada em:

```js
http://localhost:3000
```

Endpoint utilizado:

```txt
/usuarios
```

Formato esperado para um usuario:

```json
{
  "id": "1",
  "name": "Maria Silva",
  "age": 25,
  "email": "maria@email.com"
}
```

Operacoes utilizadas:

| Metodo | Endpoint | Descricao |
| --- | --- | --- |
| `GET` | `/usuarios` | Lista todos os usuarios |
| `POST` | `/usuarios` | Cadastra um novo usuario |
| `DELETE` | `/usuarios/:id` | Remove um usuario |

## Como Rodar o Projeto

Clone o repositorio:

```bash
git clone <url-do-repositorio>
```

Acesse a pasta do projeto:

```bash
cd devclub-cadastro-usuarios
```

Instale as dependencias:

```bash
npm install
```

Inicie a API local na porta `3000`.

Depois, rode a aplicacao:

```bash
npm run dev
```

Acesse no navegador:

```txt
http://localhost:5173
```

## Scripts Disponiveis

| Comando | Descricao |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versao de producao |
| `npm run preview` | Executa uma previa da build |
| `npm run lint` | Analisa o codigo com ESLint |

## Observacoes

- A API precisa estar em execucao para cadastrar, listar e excluir usuarios.
- A base URL da API esta configurada em `src/services/api.js`.
- Os avatares sao gerados automaticamente a partir do nome, email ou id do usuario.
=======

>>>>>>> e1a139bdff7026101c9ad318526988ce0f86912f
