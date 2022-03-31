## TODO List

Uma to-do list desenvolvida com Electron, React, Node.js, TypeScript e MongoDB.

## Template

Template obtido de:

[brcambui/electron-react-typescript](https://github.com/brcambui/electron-react-typescript).

## Requisitos

[MongoDB](https://www.mongodb.com/try/download/community) instalado localmente. 

## Instalação

Para instalar todas as dependências: 

```bash
yarn
```

## Uso

Para rodar o script para startar o projeto. Ele vai recarregar com mudanças no código.

```bash
yarn dev
```

## Compilação

Para rodar o pacote de scripts em ordem de gerar a compilação de produção para o SO utilizado:

```bash
yarn package
```

## Imports utilizados no app após clonar o template:

[mui/material](https://www.npmjs.com/package/@mui/material)
[react-icons](https://www.npmjs.com/package/react-icons)
[mongodb](https://www.npmjs.com/package/mongodb)
[smalltalk](https://www.npmjs.com/package/smalltalk)

Obs: caso clone este repositório, não é necessária a importação dos mesmos.

## Versões

1.1.0   Implementação do Mongo, tela, conexão front-back e CRUD
        
        Tela criada, criação e conexão com o banco realizadas. 

        É possível criar, deletar e mudar status das tarefas.

        Alterar não funcional - espera-se ser corrigido na próxima versão.


1.1.1   Correção de funcionalidade e nova feature

        Alterar agora é funcional. 

        Uma tarefa marcada como concluída agora é riscada.

        Adição de smalltalk.

        Remoção de use-prompt.


1.1.2  Micro-patch

        Remoção de mui/material.


## License

[MIT](https://choosealicense.com/licenses/mit/)

