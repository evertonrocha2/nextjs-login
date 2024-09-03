# Autenticação com Next.js e JWT
Este projeto é um sistema de autenticação utilizando Next.js e tokens JWT para gerenciar sessões de usuários.

## Requisitos
Node.js >= 14
npm >= 6

Instalação

Clone o repositório:
```
git clone https://github.com/evertonrocha2/nextjs-login.git
cd nextjs-login
```

### Instale as dependências:
```
npm install
```
### Configuração do Ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```
JWT_SECRET=sua_chave_secreta
```
Nota: JWT_SECRET é a chave secreta usada para assinar e verificar tokens JWT. Certifique-se de usar uma chave forte e secreta.

### Rodando o Projeto
Inicie o servidor de desenvolvimento:
```
npm run dev
```
O projeto estará disponível em http://localhost:3000.

Scripts Disponíveis
npm run dev: Inicia o servidor de desenvolvimento.

npm run build: Compila o projeto para produção.

npm start: Inicia o servidor em modo de produção após a compilação.

Estrutura do Projeto

pages/: Contém as páginas da aplicação, incluindo as rotas de login, registro e áreas protegidas.

components/: Componentes reutilizáveis como formulários, botões, etc.

### Contribuindo
Sinta-se à vontade para abrir issues e pull requests. Feedbacks e sugestões são sempre bem-vindos!
