# Proffy Agilizei Bootcamp

## Iniciando o projeto

1. Instale as dependências para a web e para o server
  a. acesse o diretório web: `cd web`
  b. instale as dependências: `npm install`
  c. teste o start da aplicação: `npm start`
  d. se ainda estiver no diretório web, volte para o root com `cd ..`
  e. acesse o diretório server: `cd server`
  f. instale as dependências: `npm install`
  g. teste o start da aplicação: `npm start`

*Pronto, agora é só acompanhar a aula* ⚡️

## Módulo 4

Neste modulo é porposto criar testes em Cypress para Component, API e UI.

#### Testes de Component

https://user-images.githubusercontent.com/26276025/126414103-d3973323-9a9b-449c-a675-9c55ce5cf750.mp4

#### Testes de API

https://user-images.githubusercontent.com/26276025/126414315-ae1d0f53-e8ac-4710-965a-9dd68a3d85a5.mp4

#### Testes de UI

https://user-images.githubusercontent.com/26276025/126414192-67407674-0acc-4da4-b069-a12de4676c2b.mp4

#### Relatório de cobertura dos testes
![image](https://user-images.githubusercontent.com/26276025/126414803-d816e8c6-2c92-499f-ad98-dd0a117bde80.png)

### Instalação do Cypress
Acesse a pasta do front (nesse projeto web)
```
npm install -D cypress@5.2.0
```

### Instalação e configuração do relatório de cobertura
#### Instalação do code-coverage
Acesse a pasta do front (nesse projeto web)
```
npm install -D @cypress/code-coverage
```

Adicionar ao seu `cypress/support/index.js` arquivo

```
  import @ cypress / code-verification / support
```

Registre tarefas em seu `cypress/plugins/index.js` arquivo

```
module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config)

  // add other tasks to be registered here

  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
```
documentação: https://github.com/cypress-io/code-coverage

#### Instalação do instrument-cra
Acesse a pasta do front (nesse projeto web)

```
  npm install -D @cypress/instrument-cra
```

Adicionar ao seu `package.json` arquivo
```
{
  "scripts": {
    "start:inst": "react-scripts -r @cypress/instrument-cra start",
  }
}
```
documentação: https://github.com/cypress-io/instrument-cra

#### Instalação do nyc
Acesse a pasta do front (nesse projeto web)
```
  npm install -D @cypress/nyc
```

documentação: https://github.com/istanbuljs/nyc

#### Gerar relatório
passos para executar os teste e gerar os testes de UI
No diretorio web execute os comandos:

```
  npm run start:inst
```

```
  npx cypress run --spec "cypress/integration/ui/**
```

```
  npx report --reporter:html
```

o relatorio é gerado na pasta `web/coverage/index.html`
