<h1 align="center">
     <a href="#" alt="site do ecoleta"> FrontEndAngular </a>
</h1>

<h3 align="center">
    Projeco criado para avaliação em processo seletivo de Fron End
</h3>

<h4 align="center">
  Concluído
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#sobre)
   * [Funcionalidades](#funcionalidades)
   * [Como executar o projeto](#como-executar-o-projeto)
     * Pré-requisitos
     * Criação do banco de dados e api
     * Rodando a aplicação
   * [Tecnologias](#tecnologias)
     * WebSite
     * Server
<!--te-->


<a id="sobre"></a>
## Sobre o projeto

  Este software é apenas para demonstração de codificação, um método de avaliação do conhecimento e senioridade para o ingresso em empresa de desenvolvimento de software.

  Ao iniciar a aplicação, a listagem exibe por padrão 10% de quadrinhos raros, 
  utilizando o local storage para salvar estes quadrinhos.

  As chaves públicas e privadas estão sendo salvas no Cookie.

  Os demais dados salvos estão no banco local db.json na pasta pricipal. 

  O projeto consiste na exibição de uma listagem de quadrinhos da Marvel, permitindo visualizar detalhes, salvar como favorito e possibilitando comprar o mesmo de forma simulada. Existe o meio de compra utilizando cupom de desconto, onde este não é acumulativo por quadrinho, lembrando também que o valor do desconto é somente até o total atingir o limite mínimo de R$ 0,00 (zero real).
  
  Para mais demonstrações e facilidades no uso do software na avaliação, foi criado um menu administrativo sem bloqueio por autorizações/ permisões onde o usuario pode:
  
    *Listar, criar ou atualizar as chaves publicas e privadas de uso da api da marvel.
  
    *Gerar novos quadrinhos raros, estes são gerados com quantidade randômica.
  
    *Listar, criar, atualizar, remover novos cupons de descontos para utilizar na compra dos quadrinhos.

---

<a id="funcionalidades"></a>
## Funcionalidades

- [x] Listagem de quadrinhos do tipo Raros e Comuns:
  - [x] Botão para visualizar detalhes um quadrinho
  - [x] Botão para comprar um quadrinho
  - [x] Estrela de marcação para quando um quadrinho é do tipo Raro

- [x] Detalhes do quadrinho:
  - [x] Botão para salvar um quadrinho como favorito, bloqueio para quando salvo
  - [x] Botão para comprar um quadrinho, bloqueio para quando comprado
  - [x] Estrela de marcação para quando um quadrinho é do tipo Raro
    - nome
    - descrição
    - criadores
    - serie
    - resumo
    - valor
 
 - [x] Compras do quadrinho:
    - [x] Campo e Botão para inserir e validar um cupom.
    - [x] Campo para escolher o método de pagamento.
    - [x] Campo para escolher o método de pagamento do cartão.
    - [x] Campo para escolher as parcelas do cartão. 
    - [x] Campo para setar o numero do cartão. 
    - [x] Botão para pagamento.
      - nome
      - valor do produto
      - valor de desconto
      - valor total
      - resumo
      - valor

 - [x] Favoritos:
    - [x] Botão para ver detalhes do quadrinho.
    - [x] Botão para remover de favoritos.
    - [x] Listagem dos quadrinhos favoritados.

 - [x] Compras:
    - [x] Botão para ver detalhes do quadrinho.
    - [x] Listagem dos quadrinhos comprados.

 
- [x] Cadastrar chaves:
    - [x] Botão para criar nova chave
    - [x] Botão para editar uma chave
    - [x] Listagem das chaves cadastradas

- [x] Cadastrar cupons:
    - [x] Botão para criar um cupom
    - [x] Botão para editar um cupom
    - [x] Botão para remover um cupom
    - [x] Listagem dos cupons cadastrados

- [x] Gerar quadrinhos raros:
    - [x] Botão para gerar novos quadrinhos raros de quandidade randomica

- [x] Menu:
    - [x] Botão para exibir botões administrativos
    - [x] Botão e título para navegar na página principal (HOME)
    - [x] Botão para visualizar favoritos
    - [x] Botão para visualizar compras
---

<a id="como-executar"></a>
## Como executar o projeto

Este projeto contém apenas uma parte:
1. Frontend

O Frontend  precisa que o seriviço [json-server](https://www.fabricadecodigo.com/json-server/) esteja sendo executado para funcionar.

<a id="pre-requisitos"></a>
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

   * [Git](https://git-scm.com),
   * [Angular Cli v10.2.4](https://github.com/angular/angular-cli/releases/tag/10.2.4),
   * [Node.js v14.15.4](https://nodejs.org/pt-br/blog/release/v14.15.0/),  
   * [json-server](https://www.fabricadecodigo.com/json-server/).  
   * Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<a id="instalando-as-ferramentas"></a>
#### Criação do banco de dados e api

```bash

# Criar um arquivo db.json na pasta principal do projeto
# Colar o seguinte conteúdo dentro do arquivo para manter a mesma estrutura do banco de dados que o front end vai consultar:

    {
      "coupons": [
      ],
      "keys": [
      ],
      "comics-favorite": [
      ],
      "comics-purchase": [
      ]
    }

```
---

<a id="rodando-a-aplicação-web"></a>
#### Rodando a aplicação

```bash

# Clone este repositório
$ git clone git@github.com:carlosrobertoprogramador/selective-process.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd ../selective-process-master

# Instale as dependências
$ npm install

# Execute a simulação de servidor com json-server
$ json-server --watch db.json

# O servidor inciará na porta:3000 - acesse http://localhost:3000/

# Execute a aplicação em modo de desenvolvimento
$ ng serve

# A aplicação será aberta na porta:4200 - acesse http://localhost:4200

```

---

<a id="tecnologias"></a>
## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([Angular 10](https://angular.io/cli)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Angular Material 10](https://material.angular.io/)**
-   **[Flex Layout 10](https://tburleson-layouts-demos.firebaseapp.com/#/docs)**
-   **[Material Carousel 0.6.0](https://gabrielbusarello.github.io/material2-carousel/)**


#### **Server**  ([json-server](https://www.fabricadecodigo.com/json-server/))

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   API:  **[Marvel](https://developer.marvel.com/docs)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
