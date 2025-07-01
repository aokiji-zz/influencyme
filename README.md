INICIAR FRONT END

Para rodar o front end basta entrar no diretório "influencyme-web" e rodar o comando "yarn start" após a instalação das dependências.

INICIAR CONTEINER E AMBIENTE DA API

PASSO 1 - Para rodar o back end é necessário ter o docker, docker-compose instalados no sistema. Rode o "docker-compose up --build" dentro do diretório "influencyme-api" e então o ambiente estará criado.

GERAR A MIGRAÇÃO

PASSO 2 - Rode o script de migação com "npx prisma migrate dev" apontando para o conteiner do banco.

```CASO PRECISE RODAR API LOCALMENTE (FAÇA ISSO SÓ APÓS OS PASSOS 1 E 2 TEREM SIDO EXECUTADOS COM SUCESSO)```

```Execute a api localmente com "yarn start:dev" caso seja a sua preferência. Parando de rodar o container da api antes.```
