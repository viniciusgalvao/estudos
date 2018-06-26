# Asset Pipeline

O asset pipeline provê um framework que concatena, minifica ou comprime javascript e css. Ele também adiciona abilidade de escrever nesses assets outras linguagens e pré processadores como CoffeScript, Sass e ERB. Permite aos assets da sua aplicação que sejam automaticamente combinados com assets de outras gems. Por exemplo o jquery_rails inclui uma cópia do jquery.js e ativa o ajax as features padrão do Rails.

## sprockets-rails gem

Essa gem é responsável por fazer toda a funcionalidade descrita acima. Ela vem ativa por padrão em qualquer aplicação Rails.

Caso não queira que a `sprockets-rails` venha ativa por padrão, basta quando for iniciar o projeto adicionar a tag `--skip-sprockets`

```
rails new appname --skip-sprockets
```

## fingerprint

É a impressão digital do arquivo. Toda vez que o arquivo é alterado, uma nova fingerprint(id) é gerada, evitando assim quando houver alterações no arquivo o browser carregue as mudanças feitas e não mais o cache.

## execjs

Roda código javascript a partir do Ruby. Para poder a parte de minificação e concatenação do javascript entre outros recursos e funcionalidades. Preferência utilizar o NodeJS ao invés do therubyracer.

## organização

Locais onde os assets podem ser colocados:

```
app/assets -> são os assets que são criados pela própria aplicação, ou seja, pelo próprio rails. Um exemplo é quando utilizamos o scaffold.

lib/assets -> devem ficar os assets criados pelo dev, por exemplo a criação de uma biblioteca para contagem de caracteres em um textarea e o css que estiliza esse contador.

vendor/assets/ -> bibliotecas, estilos ou recursos de terceiros
```

## uso

Metódos para chamada dos assets

```
stylesheet_link_tag
javascript_include_tag
image_tag
```

Exemplo:

```
--- stylesheet ---

<%= stylesheet_link_tag "application", media: "all" %>

--- javascript ---

<%= javascript_include_tag "application" %>

--- image ---

<%= image_tag "rails.png" %>
```

## misturando css, sass, js com ruby

### css + erb

Para executar código ruby no css, basta acrescentar a extensão `.erb` ao nome do arquivo css. Por exempo: `scaffold.scss.erb`

```
.body {
  <% color = 'blue' %>
  color: <%= color %>
}
```

### javascript ou coffescript + erb

Para executar código ruby no javascript ou coffescript, basta acrescentar a extensão `.erb` ao nome do arquivo css. Por exempo: `application.js.erb`

```
$('#logo').attr({ 'src': '<%= asset_path("logo.png") %>' })
```

## execução

O asset pipeline joga todos os arquivos da pasta `assets` dos diretórios `app, lib e vendor` para a pasta public/assets

## precompilando assets adicionais

Deve ser adicionado nesse arquivo, os arquivos que devem ser precompilados

```
config.initializers.assets.rb
```

Adicionando a linha:

```
Rails.application.config.assets.precompile += %w( filename.js filename.scss )
```
