# Conhecendo Primeiro Projeto - Agenda

## Configurações

```
- development
- test
- production
```

Quando queremos configurações específicas para cada ambiente, configuramos em `config/environments/environment_name.rb`.

Exemplo: `config/environments/production.rb`

Quando são configurações gerais, colocamos em `config/application.rb`.

## Iniciando Especificando o Ambiente

```
rails s -p 3000 -b 0.0.0.0 -e production
rails s -p 3000 -b 0.0.0.0 -e test
```
