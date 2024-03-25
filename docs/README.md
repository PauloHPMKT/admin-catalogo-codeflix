O que são entidades?
Chamadas de enterprise Business Rules -> Entidades. São o inicio do desenvolvimento e é a camada central que engloba as regras cruciais de negócios, ou seja, são objetos que organizam essas regras permitindo que a gente acesse e processe essas informações.
São identificáveis por uma informação única dentro de nosso sistema (id)
É diferente de um padrão de entidade criado em ORMs, pois possuem expressividades dentro da aplicação pois possuem regras de negocios e são agnosticas a frameworks e a linguagens de programação.
Possuem regras de negócios mais puristas.
É considerado o coração da aplicação, pois provê os recursos sobre os a regra da aplicação é regida.
O que são useCases? (caso de uso)
Centralizam regras de negócios de acordo com a necessidade da aplicação como apontar operações que podem envolver banco de dados, ou realizar publicação em serviços de mensagerias, por exemplo...
Se integram com as regras construídas na entidade da aplicação.
Controllers
Acesssam os casos de uso
O que são domain experts? (Especialista de dominio)
São pessoas que contém o conhecimento da regra de negócio, ou seja, são pessoas que detem o conhecimento de como a aplicação deve funcionar de acordo com seu dia a dia de trabalho. Ex: Em um setor administrativo temos rotinas, passo a passo relacionado gestão e arquivamento de documentos.
Observações
As alterações em camadas mais externas não devem interferir nas camadas mais internas.
As camadas precisam do que chamamos de limites arquiteturais.
Ou seja, a camada de Entidade nunca deverá ser alterada
A camada de useCase tende a mudar muito pouco relacionado as camadas mais externas.
Linguagem Ubiqua -> é uma linguagem descritiva sobre as representações repassadas pelo domain expect
Livre-se do FDD (Desenvolvimento orientado a framework)
Expressividade é o mesmo que regra de negocios
Padrão de pastas @seedwork representa uma pasta onde são criados objetos de valores, ou seja recursos que podem ser compartilhados entre os outros modulos da aplicação em uma especie de shared. A nomenclatura "@" diz que essa pasta sempre aparecerá na primeira posição no ordenamento de pastas.

O que é um objeto de valor? (Especifico do DDD)
Objeto de valor nao possui identidade própria. Imagine que vamos gerenciar esse id entre outras entidades do projeto estariamos replicando o codigo da primeira implementação:
"export class Category {
  public readonly id: string;
  constructor(private readonly props: CategoryProps, id?: string) {
    this.id = id || uuidv4();
..."
Digamos que a gente receba um id que seja invalido? Caso a gente deixe esse recurso solto, podemos replicar seus comportamentos nas outras entidades, e se houvermos algum percalço com a biblioteca que estamos usando para gerar o id? No fim teremos que ir em todos os lugares onde essa implementação está feita para corrigir seu comportamento. Isso pode ser bastante custoso. Isso ocorre pois estamos lhe dando com esse id de forma escalar utilizando recursos da propria linguagem, porém sua representação é totalmente singular, Ex: o seu valor é do tipo string, porém podemos criar um tipo especifico para esse valor visto que ele trabalha com a manipulação de uuids e isso poderia ser um tipo totalmente distindo em nossa aplicação. Então para que a gente possa resolver viasndo modelar nossa entidade?

Entidade é um conjunto de atributos e objetos de valores e também com uma identidade + comportamento.

Então objeto de valor nada mais é que um valor que estamos tratando dentro da entidade, porem com algumas caracteristicas diferentes de um valor convencional da linguagem, pois conseguimos validar seu valor dentro do objeto de valor, ele é imutável, pode conter varias propriedades.

Definição do livro do Eric Evans:
Imagina uma criança desenhando e ela usa um lapis azul, ai aconteceu do lapis quebrar a ponta e voce teve que pegar um lapis azul de uma outra caixa, a criança não se importa. Ou seja, o lapis da cor azul representa um objeto de valor, pois da mesma forma do lapis ele pode ser substituido por outro lapis da mesma cor, isso mantendo sua caracteristica de uma cor unica.

No resumo, objeto de valor contem dados e caracteristicas que medem, quantificam ou descrevem algo em uma entidade de dominio e que podem ter seus comportamentos compartilhados entre outras entidades.

Informações do diagrama de caso de uso:
Admin:
Criar categoria
Atualizar categoria
Excluir categoria
Consultar uma categoria
Consultar categorias
Diagrama de classe - Montagem da Entidade
Entity Category

Category: id uuid
name string
description string
is_active boolean
created_at date
Category : Create()

Category : Update()

Category : Activate()

Category : Deactivate()

Category : delete()

Obs:

trabalhar com sets em excesso pode tirar a expressividade da entidade tornando-a anemica.
é importante pensar nas operações de forma agnostica a qualquer recurso externo. Uma boa arquitetura permite adiar decisões.
Quando se constroi uma entidade com esses conceitos de arquitetura as props da entidade nem sempre serão obrigatórias. Ex: Imagine que na nossa entidade com name, description, is_active, created_at, description seja facultativo... obrigatóriamente todas as props seguintes tambem precisam ser facultativas, pois dentro de metodos e construtores não é possível que uma prop da metade do ordenamento seja opcional. Props opcionais devem ficar por ultimo nas suas declarações.
Com isso utilizamos interfaces que permitem flexibilizar esse manuzeio
Clean Architecture: Criado por Uncle Bob Robert C Martin em 2012

Ponto focal de arquitetura limpa, consiste em

Proteger o núcleo central e dominios da aplicação
Cria contratos (intefaces) entre as camadas
Baixo acoplamento entre as camadas
Orientada a casos de uso (são intensões do usuario para com o sistema)
Percepção sobre regras de negócios
Key Option Open

Criar limites arquiteturais muito claros acaba por criar partes que não dependam diretamente uma da outr além de nos permitir postergar decisões.
Pontos importantes sobre arquitetura:

Limites parciais:
É a maneira de pensar aplicando um conceito que visa romper os limites arquiteturais como forma de não tornar a arquitetura tão purista em detrimento de manter a aplicação como a gente precisa com o objetivo de baixar o custo de desenvolvimento. Nesse contexto para criar um id (identificador da entidade) precisamos fazer que a nossa entidade dependa de um recurso externo para auxiliar na sua modelagem e implementação das suas regras crusciais de negócios.

Formato que o Software terá - Ligado ao design de software
Divisão de componentes - Pensar a nível de arquitetura quais componentes ele terá
Comunicação entre esses componentes
Uma boa arquitetura vai facilitar o processo de desenvolvimento, deploy, operação e manutenção.
Regras vs Detalhes

Regras de negocio trazem o real valor para o sistema
Detalhes ajudam a suportar as regras
Detalhes não devem imapctar nas regras de negócio
Frameworks, banco de dados, apis, não devem imapactar as regras
O Core da sua aplicação é o mais importante
DDD - Atacar a complexidade no coração do software

A importancia de casos de uso (UseCases)

Representam uma intenção - Cada ação é uma intenção e cada intenção e um caso de uso
Clareza de cada comportamento do software
Detalhes não devem impactar nas regras de negocio
Frameworks, banco de dados, apis não devem impactar nas regras de negócios
UseCases - SRP (Single responsability Principle)

Temos a tendencia de "reaproveitar" use cases por serem muito parecidos.
Ex: Alterar vs Inserir. Ambos consultam se o registro existe, persistem dados. MAS, são useCases diferentes. Porque?
SRP - Mudam por razões diferentes Quando a alteração naquele código é diferente, muda quando voce faz alterações por razões diferentes significa que o SRP está sendo ferido, cada use cases apesar de parecido tem razões de mudanças diferentes.
Duplicação real vs Duplicação acidental

Falsas duplicações nos faz perceber que conforme o sistema vai mudando suas etapas de codigo andam por caminhos diferentes
Use Cases contam historias

Muitas vezes uma intenção pode soar muito estranho
use case é a concretização de uma automatização, visto que um sistema é automatização de tarefas
O use case é o orquestrador do fluxo dentro da aplicação Ex: Simulação de caso de uso (Emprestimo)- regra de negocio que é chamada a partir do use case 1 - Aceita e valida o nome 2 - Valida endereço, aniversário, DL, SSN... 3 - Capta o credit score 4 - Valida se o credit score é < 500, se não ela nega 5 - Se não ele cria a estimativa de emprestimo.
Limites arquiteturais:

Divisão de componentes e estabilização de contratos Tudo que nao impacta diretamente nas regras de negocio deve estar em um limite arquitetural diferente. Ex: Não será o Frontend, banco de dados que mudarão as regras da aplicação.
Business Rules Layer | | implementação | Database interface (Abstração) | | implementação | Database Access ------------> Database

A camanda de negócios inversamente chama a camada de regras de negócios Nunca a camada de regras de negocios deve chamar a camada que acessa banco de dados

Input vs Output

Tudo se resume a um input que retorna um output
Ex: Criar um pedido (dados do pedido = input) Pedido criado (dados de retorno do pedido)
Simplifique seu raciocinio ao criar um software sempre pensando em Input e Output
Inputs geralmente vem de qualquer lugar, porém no fim do dia sempre vai ser um input, da mesma forma ocorre com o Output
DTO - (Data Transfer Objct)

Trafegar os dados entre os limites arquiteturais Ex: Trafega os dados entre as camadas criando um Objeto que é utilizado para trafegar esses dados
Objeto anemico, não possui comportamento livre de regras
Contem dados (Inputs e Outputs) =====> Controller =====> useCase useCase ======> Controller
Outro ponto importante é que cada intensão do sistema muitas vezes precisa de DTOs diferentes Ex: Imagine que queremos criar uma categoria, criamos um DTO onde precisamos ter um Objeto com Atributos que retorne esse fluxo
Para alterar dados devemos criar um novo DTO que vai tratar os dados especificos para alteração
São diferentes pois cada DTO segue um caminho diferente
Ex: DTO input - Request

API -> CONTROLLER -> USE CASE -> ENTITY O fluxo de devolução da informação também funciona via DTO
Controller cria um DTO com os dados recebidos, cria um DTO para output e retorna para o controller
Presenters

Objetos de transformação
Adequa o DTO de output no formato correto para entregar o resultado
Lembrando: Um sistema por ter diversos formatos de entrega, ex: XML, JSON, Protobuf, GraphQL, CLI... Ex: Criação de um DTO que será trafegado input = new CategoryInputDTO("name"); output = CreateCategoryUseCase(input); -> A partir daqui estamos trafegando dados de uma camada para outra jsonResult = CategoryPresenter(output).toJson(); -> Convertemos o output para um JSON, mas poderia ser qualquer coisa
Entidades - Entities

Entities da Clean Architecture !== Entities do DDD
No DDD são Camadas de agregado, no Clean Arch é um conceito de camada com regras de negocios
Elas se aplicam em qualquer situação pois são o core da aplicação com regras de negocios globais
Não há definição explicita de como criar as entities
Normalmente utilzamos táticas do DDD
Entities = Agregados + Domain Services
useCase pode varia com o fluxo / entity tem suas regra solidificadas

Exemplo de teste:
import { Category } from "./Category"

describe('Category Entity unit tests', () => {
  it('should test Category Entity constructor', () => {
    const created_at = new Date();
    const category = new Category({ 
      name: "Movies",
      description: "Some description",
      is_active: true,
      created_at
    });

    
    expect(category['props'].name).toBe('Movies')
    expect(category['props'].description).toBe('Some description')
    expect(category['props'].is_active).toBeTruthy()
    expect(category['props'].created_at).toBe(created_at)
  })
})


Sobre identificadores em Entidades:
Mais focado em DDD uma identidade precisa ter um identificador que cria os nossos
comportamentos e atributos. Essa identidade tem que ser independente de qualquer 
amarra ou dependencia de recursos externos.