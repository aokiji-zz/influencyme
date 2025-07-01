Para rodar o front end basta entrar no diretório "influencyme-web" e rodar o comando "yarn start" após a instalação das dependências.

Para rodar o back end é necessário ter o docker, docker-compose instalados no sistema. Rode o "docker-compose up --build" dentro do diretório e então o ambiente estará criado. Rode o script de migação com "npx prisma migrate dev" apontando para o conteiner do banco. Execute a api localmente com "yarn start:dev" ou inicie ela no container.
