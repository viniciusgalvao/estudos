# Bundler

O bundler é responsável por gerenciar as dependências de uma aplicação. O bundler é uma gem, que gerencia outras gems.

Site oficial: [bundler.io](http://bundler.io)

Para seu funcionamento, um arquivo `Gemfile` deve ser criado. Nele é colocada todas as dependências do projeto.

## Instalação

Para instalar o bundler, basta rodar o comando: `gem install bundler`

Após a instalação, você deve criar um arquivo chamado: **Gemfile** no diretório do seu projeto, e adicionar um `source` e as gems que você deseja instalar em seu projeto, conforme exemplo abaixo.

```
source 'https://rubygems.org'

gem 'rails'
gem 'cpf_utils'
gem 'faker'
```

Após criar o arquivo, o comando `bundler install` deve ser executado. Ele irá instalar todas as gems descritas no arquivo e suas dependências.

## Versão das Gems

EXATA:

```
gem 'lerolero', '1.0.0'
```

IGUAL OU MAIOR

```
gem 'cpf_utils', '>=1.0.0'
```

PARCIAL ATUAL

```
1. gem 'faker', '~>1.6' (>= 1.6 && < 2.0 )
2. gem 'faker', '~>1.0.2' (>= 1.0.2 && < 1.1)
```
