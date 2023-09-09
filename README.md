# README.md

![Tamanho do repositório GitHub](https://img.shields.io/github/repo-size/JKrabbee/back-end-shopper)
![Estrelas no GitHub](https://img.shields.io/github/stars/JKrabbee/back-end-shopper)
![Forks no GitHub](https://img.shields.io/github/forks/JKrabbee/back-end-shopper)
![Licença do GitHub](https://img.shields.io/github/license/JKrabbee/back-end-shopper)

## Back-end-shopper

Este projeto consiste em um servidor Node.js que oferece um serviço de validação de dados a partir de arquivos CSV. Ele permite que os usuários enviem arquivos CSV para serem processados e validados com base em regras específicas definidas no código. O servidor é capaz de validar preços de produtos, tanto para produtos individuais quanto para pacotes de produtos, calculando os preços unitários dos pacotes antes da validação. Além disso, o projeto inclui funcionalidades para registro de logs detalhados, tratamento de erros e suporte a solicitações de diferentes origens (CORS). É uma ferramenta útil para validar e processar dados de produtos em lote a partir de arquivos CSV.

## Tabela de Conteúdo

- [Nome do Projeto](#nome-do-projeto)
- [Tecnologias](#tecnologias)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
- [Uso](#uso)
- [Contribuições](#contribuições)
- [Licença](#licença)

## Tecnologias

O projeto foi criado com as seguintes tecnologias:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Fast-CSV](https://www.npmjs.com/package/fast-csv)
- [Multer](https://www.npmjs.com/package/multer)
- [TypeScript](https://www.typescriptlang.org/)

## Começando

Para começar com este projeto, você precisará clonar o repositório e instalar os módulos Node necessários usando o `yarn`.

### Pré-requisitos

Certifique-se de ter o seguinte software instalado em sua máquina:

- [Node.js](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)

### Instalação

```bash
# Clone o repositório:
git clone https://github.com/JKrabbee/back-end-shopper

# Instale os módulos Node necessários usando o yarn:
yarn install
```

## Uso

Você pode usar os seguintes comandos do Yarn para executar o projeto:

- `yarn start`: Iniciar o projeto em modo de produção.
- `yarn dev`: Iniciar o projeto em modo de desenvolvimento com suporte TypeScript.
- `yarn build`: Compilar os arquivos TypeScript.
- `yarn test`: Executar testes (se disponíveis).

Substitua os comandos acima pelos que você precisa para o seu projeto específico.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir um problema se encontrar algum bug ou tiver sugestões.

## Licença

Este projeto está licenciado sob a [Licença ISC](LICENSE).

---

Feliz codificação! :rocket:
