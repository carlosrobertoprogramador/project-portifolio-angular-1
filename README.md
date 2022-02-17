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

  Este software é apenas para demonstração de codificação, um método de avaliação do conhecimento para o ingresso em empresa de desenvolvimento de software.

Menu  

    *O menu possui o titulo que redireciona para a listagem de quadrinhos e um botão 'HOME' que faz o mesmo.
    
    *Ao lado esquerdo do título foi criado um botão de menus administrativos.

    *No canto direito dois botões, um de quadrinhos favoritos e outro de quadrinhos comprados.

Listagem  

    *Ao iniciar a aplicação, a listagem exibe por padrão 10% de quadrinhos raros com relação a quantidade total retornada da API sem filtro. Foi divido em blocos a listagem de 'RARIDADES' e 'OUTROS' para facilitar a visualização, os quadrinhos raros possuem uma estrela verde deixando o mesmo mais especial.

    *Cada quadrinho exibido possui dois botões, 'DETALHES' e 'COMPRAR', clicar com mouse no card redireciona para detalhes também. 
    
    *Foi criado também um carrousel que exibe 'SOMENTE' quandrinhos raros, em caso de geração randomica setar 0 quadrinhos raros o carrousel não será exibido. 

Detalhes  

    *Em detalhes é possivel visualizar a estrela de raridade, titulo, valor, descrição, criadores, serie, resumo e uma imagem do quadrinho.

    *Existem dois botões um de favoritar e outro comprar.

Comprar  

    *Em comprar é possivel visualizar a estrela de raridade, titulo, valor e uma imagem do quadrinho.

    *Existe o campo para setar o cupom de desconto que deve existir na listagem de cupons da parte administrativa para ser validado de acordo com os parametros do mesmo, o cupom quando validado automaticamente desconta no valor do quadrinho, mas nunca fica menor que R$ 0,00. O cupom raro funciona para quadrinhos raros e comuns, mas o cupom comum não funciona para quadrinhos raros.
    
    *Existe o campo de metodo de pagamento, com boleto e cartão, caso boleto o botao de pagamento ja é liberado automaticamente mas se for cartão, deve-se preencher os demais campos, metodo de pagamento do catão, debito ou credito, caso credito deve-se setar a parcela e por fim o campo de numero do cartão para assim então o botao de pagamento ser liberado.

    *Ao realizar o pagamento é exbida uma página de succeso para o usuario com a imagem do quadrinho e um botao sair.

Listagem de Compras

    *Exibe os quadrinhos comprados e um botão de detalhes.

Listagem de Favoritos

    *Exibe os quadrinhos favoritados, um botão de detalhes e um botão para remover como favorito.

Cadastrar chaves da marvel

    *Exibe as chaves cadastradas, um botao para cadastrar novo e um para editar.

    *Foi criado para quando o usuario realizaar os testas do software não necessiar mexer no código para setar sua chave pessoal.

Gerar quadrinhos raros

    *Um botão que gera uma quantidade randomica de quadrinhos raros aleatoriamente.

Gerar novos cupons

     *Exibe os cupons raros e comuns, um botão para criar, um botão de editar e um botão para remover.

Quadrinhos RAROS são salvos no local storage.

As chaves públicas e privadas estão sendo salvas no Cookie.

Os demais dados salvos estão no banco local db.json na pasta pricipal.

Caso não existir uma das chaves publica e privada cadastrada no dv.json ou Cookie o usuario é redirecionado para cadastrar uma nova, as rotas são barradas o acesso caso isto ocorra.
  
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
