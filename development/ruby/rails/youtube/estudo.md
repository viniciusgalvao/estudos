# Anotações - Ruby on Rails #

## GEM ##

`gem install lib`

## Bundler ##

Responsável por gerenciar as gems em sua aplicação Rails.

## Criando / Rodando uma aplicação ##

Criando uma nova aplicação: `rails new appname`
Com banco de dados definido: `rails new appname --database=mysql`

Para rodar essa aplicação basta executar o comando: `rails s`
Com o ambiente definido: `rails s -e environment_name`

## Classes, Módulos, Mixins e o Yield ##

#### O que é um Módulo? ####
Um módulo é uma coleção de metódos e constantes.

Sintaxe:

modulo_configuracoes.rb
```
module Configuracoes
  # constantes
  NOME_DO_SISTEMA = "Sistema de Academia"
  VERSAO = "1.2.4.5"

  # metódos
  def calcular
    puts "O resultado final foi é tanto......"
  end
end
```

modulo_correio.rb
```
module Correio
  def enviar_correio
    puts "enviando......."
  end
end

```

Uso:
```
include Configuracoes

puts NOME_DO_SISTEMA
-- output: "Sistema de Academia"
```

#### O que é um Mixin? ####

O Ruby não suporta herança múltipla diretamente, mas Módulos de Ruby podem ter outros usos maravilhosos. De um só golpe, eles praticamente eliminam a necessidade de herança múltipla, proporcionando um mecanismo chamado de Mixin.

Sintaxe:

```
require_relative "modulo_configuracoes"
require_relative "modulo_correio"

class MeuMixin
  include Configuracoes
  include Correio
end
```

Uso:
```
mm = MeuMixin.new
mm.calcular
mm.enviar_correio
```

#### Blocos e o Yield ####

O Yield é uma forma de passar um bloco de código para dentro de uma função ou para dentro de outras coisas.

Sintaxe:
```
def ola
  puts "olá olá olá"
  yield
  puts "oi oi oi"
end  
```

Uso:

`ola {"Olha eu inserido aqui no meio através do Yield"}`

## Banco de Dados e Rake ##

#### Config.yml ####

Para criar uma aplicação com um banco de dados predefinido basta utilizar

`rails new appname --database=mysql_or_sqlite_or_mongodb`

#### Rake ####

É um software para gerenciamento de tarefas.

O rake tasks é onde você pode criar suas tarefas que serão executadas pelo rake.

Comando para lista de tarefas disponíveis do Rake

```
rake -T
rake -T db (filtra todas as tasks com db)
```

Exemplo de Uso

`rake db:create` => responsável por criar o banco de dados

## CoC e Criando o 1o Scaffold ##

#### CoC ####

Convenção sobre configuração.

#### Scaffold ####

Serve para criar as toda a estrutura das 4 operações (CRUD)

Sintaxe:

```
rails generate scaffold customer name:string body:text
ou
rails g scaffold customer name:string body:text
```

## Migrations, analisando e utilizando o scaffold ##

Ajuda na atualização do sistema, quando precisamos alterar a estrutura de dados

#### db:migrate ####

Responsável por migrar as alterações na estrutura de dados para o Banco de Dados

`rake db:migrate`

## Views, Embedded Ruby e Textos Interpolados com Variáveis ##

#### Embedded Ruby ####

Responsável por executar código ruby no html, os arquivos são na extensão **.erb**.

Sintaxe:

```
<% %> - Código Ruby sem saída para o html
<%= %> - Saída de um valor para o html
<%= -%> - Saída de um valor para o html sem a quebra de linha no final
<%# %> -  Serve para comentário, não tem saída para o html nem é executado pelo ruby
```

#### Interpolação de Variáveis e Texto ####

Sintaxe: `#{}`

Exemplo:

```
<% a = "Ruby" %>
<% b = "Rails" %>

<%= "teste #{a} on #{b}" %>

Output: teste Ruby on Rails
```

## Active Record, Rails Console e Variáveis de Instância ##

#### Rails Console ####

Ele carrega todas as classes padrão do rails, e carrega todas as classes do nosso projeto no console.

Sintaxe: `rails c`

#### Variáveis de Instância ####

São variáveis que ficam disponíveis entre o controller e a view.

Sintaxe:

```
def all
  @customers = Customer.all
end
```

Uso na View:

```
<% @customers.each do |customer| %>
<p><%= customer.name %>
<% end %>
```

## Rotas, Criando um Controller e Usando Helpers ##

#### Rotas ####

Arquivo de configuração: `config/routes.rb`

Exemplo:

```
root 'welcome#index'
get 'inicio' => 'welcome#index'
```

#### Helpers ####

O helper está relacionado a view

***link_to***

```
<%= link_to "Cadastro de Clientes", customers_path ## não é a melhor forma %>
<%= link_to "Cadastro de Clientes", "/customers" %>

outputs: <a href="/customers">Cadastro de Clientes</a>
```

## Rotas REST/Restful ##

O `resources :customers` em `config/routes.rb` é responsável por gerar todas as rotas do padrão REST `GET, POST, PUT, DELETE, PATCH`

## Symbols x Strings e brincando com Active Record ##

#### Symbols x Strings ####
`:texto` x `"texto"`

Simbolos são reusados, mas as strings sempre que são invocadas, elas criam uma nova instância da string em memória.

#### ActiveRecord ####

Pesquisando, criando e persistindo no BD.

```
ModelName.first
ModelName.last
ModelName.all
ModelName.find

WHERE
ModelName.where(id: 1)
ModelName.where(:id => 1)

CREATE
ModelName.create(field: value, field: value, datefield: Date.today)

CREATE by NEW

obj = ModelName.new
obj.field = value
obj.field2= value2
obj.save
```

## Controllers, Filtros e Partials ##

#### Filtros ####

São metódos que são executados, antes, depois ou antes-depois de alguma requisião ao controller

```
- before_action
- after_action
```

Exemplo

```
# ação que será executado antes de executar o metódo chamado...
# o "only:" diz em que ações(metódos) o :set_customer será chamado.
before_action :method_name, only: [:show, :edit, :update, :destroy]
```

#### Partials ####

É um arquivo html ou erb que começa com **_** no seu nome. Por exemplo: `_form.html.erb`.

Exemplo:

```
<%= render 'form', customer: @customer %>
```

## Helpers e Params ##

#### Helpers ####
Olhar o helper form_for().

#### Params ####

Para pegar os parâmetros vindo pela url, basta utilizar a variável global `params[:paramName]`.

Exemplo:

```
@customer = Customer.find(params[:id])
```

Permitindo parâmetros específicos

```
params.require(:customer).permit(:name, :email, :birthday, :obs)
```

##  i18n - Internationalization ##

**Como Ativar?**

Acessar o arquivo `config/application.rb`e depois adicionar essa linha com uma localização padrão `config.i18n.default_locale = "pt-BR" ou onfig.i18n.default_locale = :en`.

**Como Usar?**

translate # Traduzir textos
localize # Localizar data/hora

Classes disponíveis no Rails.

It18n.t # Traduzir Textos
I18n.l # Localizar data/hora

Para usar as traduções na view basta utilizar o `t(key)` ou o `l(key)` que ele vai saber que você está querendo fazer a tradução ou a localização.

Exemplo

```
<%= t('hello') %>
<%= l(field_datetime) %>
```

## Twitter Bootstrap e i18n para Active Record ##

#### Twitter Bootstrap ####

## Rails Compose ##

É um sistema que cria templates para aplicações Rails.

Para criar uma aplicação usando o Rails Composer, basta executar o seguinte comando:

```
rails new learn-rails -m https://raw.github.com/RailsApps/rails-composer/master/composer.rb
```

## Rake db:seed ##

O `db:seed` é uma task onde é possível inserir dados inicialmente em sua base de dados. Para inserir esse dados basta ir no script `db/seeds.rb` e criar o script de inserção em suas respectivas tabelas

Por exemplo:

```
movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
```

## Criando suas próprias Rake Tasks ##

Sintaxe: `rails generate task <namespace> <taskname>`

Exemplo: `rails generate task utils setup_user`

**libs/tasks/utils.rake**
```
namespace :utils do
  desc "Popular a tabela users"
  task setup_user: :environment do
    if Rails.env.development?
      User.create [{name: "Carlos", email: "carlos@gmail.com"}, {name: "João", email: "joao@gmail.com"}]
    else
      puts "Você não está em modo de desenvolvimento!"
    end
  end
end
```
Uso: `rake utils:setup_user`

## Associações ##

`belongs_to`
`has_many`

Sintaxe

```
rails g model Father name:string
rails g model Child name: string father:references # aqui é onde eu especifico a assosiação (belongs_to)
```

Modelo

```
Class Father < ApplicationRecord
  has_many :children # plural
end

Class Child < ApplicationRecord
  belongs_to :father
end
```

Uso

```
pai = Father.create(name: "Joao")
filho = Child.create(name: "Joaquina")
filho.father = pai
filho.save

ou

pai = Father.create(name: "Joao")
pai.children.create(name: "Joaquina")
```

## Associações na View ##

## Autenticação de Usuários com Devise (Básico) ##

## Usando autorização com Pundit e Devise (Básico) ##

#### ActiveRecord Enum ####

```
class Customer < ActiveRecord::Base
  enum status: [ :active, :archived] # definição
  enum status2: { active: 0, archived: 1}
end

# customer.update! x: 0
customer.active!
customer.active? # => true
customer.status # => "active"

# customer.update! status: 1
customer.archived!
customer.archived?

# customer.update! status: 1
customer.status # => "archived" # << pode ser utilizado o nome da "chave" para associação do valor.

# customer.update! status: nil
customer.status = nil
customer.status.nil? # => true
customer.status # => nil
```

## Dicas, Gems e Outros ##
- devise (GEM) autenticação + pundit (GEM) autorização
- will_paginate (GEM) para paginação
- Paperclip (GEM) - Upload de Arquivos
- faker (GEM) - serve para falsiar dados com a finalidade de teste

#### Adicionando um migration para um campo ####

Comando:

`rails g migration AddFieldToModuleName`

Implementação:

```
class AddRoleToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :role, :integer, :default => 0
  end
end
```
