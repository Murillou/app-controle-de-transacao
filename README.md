# Controle de Transações

Este é um aplicativo de controle de transações desenvolvido com **React**, utilizando **JSON Server** para simular uma API e **Styled Components** para estilização.

## 💻 Tecnologias utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces.
- **Styled Components**: Biblioteca para estilização com CSS-in-JS.
- **JSON Server**: Ferramenta para criar uma API fake rapidamente.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build rápida para desenvolvimento de aplicações modernas.

## 📋 Funcionalidades

- Cadastro de novas transações financeiras (entrada e saída).
- Listagem de transações cadastradas.
- Cálculo automático do saldo total.
- Filtro de transações por descrição.

## 🚀 Como executar o projeto

Para executar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

- Node.js instalado.
- Gerenciador de pacotes como `npm`, `yarn` ou `pnpm`.

### Passos

1. Clone o repositório:
   ```bash
   git clone git@github.com:Murillou/app-controle-de-transacao.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd app-controle-de-transacao
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```
   ou, se estiver utilizando `yarn`:
   ```bash
   yarn
   ```
   ou `pnpm`:
   ```bash
   pnpm install
   ```

4. Inicie o JSON Server para a API fake:
   ```bash
   npm run server
   ```

5. Em outro terminal, inicie o projeto:
   ```bash
   npm run dev
   ```

6. Abra o navegador no endereço fornecido (geralmente `http://localhost:5173`).
