# Conhecendo o Bower

## gem

`gem bower-rails` é a gem responsável por facilicar a vida na hora de utilizar o bower com o rails.

## instalando dependências

`rails g bower_rails:initialize json` into both `lib` and `vendors` directories, execute o inicializador para gerar um arquivo bower.json personalizado

Após rodar esse comando, 2 arquivos serão criados:

```
1. bower.json 
2. config/initializers/bower_rails.rb
```

> bower.json

```
{
  "lib": {
    "name": "bower-rails generated lib assets",
    "dependencies": {
      // "threex"      : "git@github.com:rharriso/threex.git",
      // "gsvpano.js"  : "https://github.com/rharriso/GSVPano.js/blob/master/src/GSVPano.js"
    }
  },
  "vendor": {
    "name": "bower-rails generated vendor assets",
    "dependencies": {
      "notifyjs"  : "v0.4.2"
      // "three.js"    : "https://raw.github.com/mrdoob/three.js/master/build/three.js"
    }
  }
}
```

Após preencher suas dependências, basta executar o `rake bower:install`.

Terminada a instalação das dependências, basta acessar o arquivo `app/assets/application.js` e/ou `app/assets/application.css`.

Exemplo:

> application.js

```
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require cocoon
//= require notifyjs/dist/notify
//= require tree .
```
