# Restaurants Search
<div align="center">

_Projeto desenvolvido para o bootcamp LocalizaLabs React Developer_

 <a href="https://web.digitalinnovation.one/" rel="noopener">
    <img width=35% src="https://hermes.digitalinnovation.one/site/images/cover_dio.jpg" alt="Logo Digital Innovation One">
 </a>

## Sumário:
[Sobre](#about) |
[Rotas da aplicação](#routes) |
[Regras de negócio](#rules) |
[Informações](#informations)

</div>

* * *
## :bookmark_tabs: Sobre o projeto <a name="about"></a>

Nesse projeto foi desenvolvido uma **Aplicação** utilizando o framework **Next** com o frontend React.
O projeto aborda toda a trilha e explicações do conceito além de mostrar as aplicações desenvolvidas durante a trilha.

<h3 align="center">

:globe_with_meridians: [Deploy]()
    
</h3>


* * *

## :warning: Rotas da Aplicação <a name="routes"></a>

* * *
## :large_blue_circle: Páginas feitas <a name="rules"></a>

- [ ] Bem-vindo à DIO
- [ ] Boas-vindas ao Bootcamp LocalizaLabs React Developer
- [ ] Lógica de Programação Essencial
- [ ] Aprenda o que são Estrutura de Dados e Algoritmos
- [ ] Introdução ao Git e ao GitHub
- [ ] Introdução a criação de websites com HTML5 e CSS3
- [ ] JavaScript ES6 essencial
- [ ] Programação para internet com JavaScript
- [ ] Desenvolvimento avançado com JavaScript ES6
- [ ] Recriando a Interface do Netflix
- [ ] Resolvendo Desafios de Código em Javascript
- [ ] Iniciando Desafios em JavaScript
- [ ] Introdução ao ReactJS
- [ ] Trabalhando com Componentes em React
- [ ] Desenvolvimento de aplicações para internet com ReactJS
- [ ] riando um site para encontrar restaurantes usando Google Maps que consulta API do Google
- [ ] Introdução aos React Hooks
- [ ] Desafios Aritméticos em JavaScript
- [ ] Trabalhando com States & Effects no ReactJs
- [ ] Práticas avançadas em projetos com ReactJS
- [ ] Como gerenciar o estado das aplicações com Redux
- [ ] Introdução ao TypeScript: Explorando Classes, Tipos e Interfaces
- [ ] Criando um front-end totalmente componentizado na prática com ReactJS
- [ ] Desafios Matemáticos em JavaScript
- [ ] Criando uma aplicação ReactJS de notícias utilizando PWA
- [ ] Testes unitários com React e Jest

* * *
## :books: Informações <a name="informations"></a>

#### :rocket: Execução

```yarn dev```
> Para rodar o projeto localmente .

```yarn start```
> Automatizado para produção juntamente com o arquivo Procfile para o deploy no serviço de hospedagem do heroku.

* * *

#### :gear: Bibliotecas

1.  [Yarn](https://yarnpkg.com/): Gerenciador de depedências do projeto utilizado.
1.  [styled-components](https://yarnpkg.com/package/styled-components/): Componentes estilizados [Documentação](https://styled-components.com/).
1.  [styled-reset](https://yarnpkg.com/package/styled-reset): Reset de CSS para componentes estilizados.
* * *
### :file_folder: Estrutura do Projeto

A estrutura da aplicação está baseada no conceito de [SOLID](https://www.youtube.com/watch?v=vAV4Vy4jfkc).
Tenho aplicado esse conceito, pois se consegue separar as funcionalidades e caso necessite futuramente mudar a forma de implementação com outro banco de dados por exemplo, seria necessário mudar somente o método de implementação que é utilizado para o retorno de dados, sem interferir na interação da aplicação restante, pois os UseCases não dependem da infraestrutura em si, somente do retorno de dado através da injeção de dependências.
#### :open_file_folder: pages
> ./pages/
