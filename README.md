INICIAR FRONT END

Para rodar o front end basta entrar no diretório "influencyme-web" e rodar o comando "yarn start" após a instalação das dependências.

INICIAR CONTEINER E AMBIENTE DA API

Para rodar o back end é necessário ter o docker, docker-compose instalados no sistema. Rode o "docker-compose up --build" dentro do diretório "influencyme-api" e então o ambiente estará criado.

GERAR A MIGRAÇÃO

Rode o script de migação com "npx prisma migrate dev" apontando para o conteiner do banco.

CASO RODE PRECISE RODAR API LOCALMENTE

Execute a api localmente com "yarn start:dev" caso seja a sua preferência. Parando de rodar o container da api antes.
