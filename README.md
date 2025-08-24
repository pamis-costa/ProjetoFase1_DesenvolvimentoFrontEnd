# Projeto Fase 1 - Formulário de Controle de Séries
## Nome do aluno(a): `Pâmela Costa`

Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento de Sistemas Frontend do Curso de ADS da PUCRS. É uma aplicação para gerenciamento de séries assistidas.

---

### Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  Clone ou baixe este repositório e entre na pasta principal do projeto pelo terminal:
    ```
    cd fase1
    ```

2.  Rode `npm install` para instalar todas as dependências necessárias:
    ```
    npm install
    ```

3.  Em seguida, para iniciar a execução em modo de desenvolvimento, rode:
    ```
    npm run dev
    ```

4.  Abra o seu navegador e acesse o endereçoque aparecer no seu terminal.


### Telas do Projeto

**tela inicial**
![Demonstração do projeto](./docs/telainicial.png)

**tela sobre**
![Demonstração do projeto](./docs/telasobre.png)

**tela cadastro**
![Demonstração do projeto](./docs/telacadastro.png)

**tela listas**
![Demonstração do projeto](./docs/telalista.png)

## Componentes Desenvolvidos

Os componentes principais da aplicação estão no diretório `./src/components` e possuem as seguintes responsabilidades:

-   **`NavBar`**:
    - **Descrição**: Este componente renderiza a barra de navegação principal da aplicação.  Ele contém os links que permitem ao usuário navegar entre as diferentes páginas, como "Página Inicial", "Sobre", "Cadastrar Séries" e "Lista de Séries".

-   **`SerieForm`**:
    - **Descrição**: Responsável por renderizar o formulário de cadastro de novas séries.  [cite_start]Ele contém todos os campos de entrada necessários (Título, Temporadas, Diretor, etc.) e o botão para submeter os dados. 

-   **`SerieList`**:
    - **Descrição**: Este componente é usado para exibir a lista de todas as séries cadastradas. Ele recebe a lista de séries via `props` e renderiza cada item, incluindo as informações e os botões de "Editar" e "Excluir" para cada série. 

## Conclusão

Este projeto implementa as funcionalidades essenciais de um CRUD (Create, Read, Update, Delete) de forma estática para a gerência de séries.  A estrutura foi organizada com base na componentização para garantir um código mais limpo e reutilizável, atendendo aos requisitos da Fase 1 do projeto.