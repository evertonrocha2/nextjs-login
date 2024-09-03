Autenticação com Next.js e JWT

Este projeto é um sistema de autenticação utilizando Next.js e tokens JWT para gerenciar sessões de usuários.

Requisitos

Node.js >= 14
npm >= 6

Instalação
Clone o repositório:

bash```
git clone https://github.com/evertonrocha2/nextjs-login.git
cd nextjs-login
``

Instale as dependências:

Execute o seguinte comando para instalar todos os pacotes necessários:

bash
npm i
Configuração do ambiente:

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

env
JWT_SECRET=sua_chave_secreta
JWT_SECRET: A chave secreta usada para assinar e verificar tokens JWT. Certifique-se de usar uma chave forte e secreta.
Rodando o Projeto
Inicie o servidor de desenvolvimento:

Após configurar o ambiente e instalar as dependências, execute o comando abaixo para iniciar o servidor:

bash
Copiar código
npm run dev
O projeto estará disponível em http://localhost:3000.

Scripts Disponíveis
npm run dev: Inicia o servidor de desenvolvimento.
npm run build: Compila o projeto para produção.
npm start: Inicia o servidor em modo de produção após a compilação.

Estrutura do Projeto
pages/: Contém as páginas da aplicação, incluindo as rotas de login, registro e áreas protegidas.
components/: Componentes reutilizáveis como formulários, botões, etc.
utils/: Funções utilitárias, como a criação e verificação de tokens JWT.
middleware/: Middlewares para proteger rotas e verificar tokens JWT.

Contribuindo
Sinta-se à vontade para abrir issues e pull requests. Feedbacks e sugestões são sempre bem-vindos!

