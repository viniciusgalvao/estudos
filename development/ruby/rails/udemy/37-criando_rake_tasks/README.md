# Criando Rake Tasks

## Listando Todas as Rake Tasks Disponíveis

O comando `rake -T`, é responsável por mostrar todas as rake tasks disponíveis para o projeto corrente.

```
rake -T
------ filtrando ------
rake -T db (lista todas as taks que contem o db no namespace)
```

## Criando

Para criar uma `rake task`, basta rodar o comando `rails g task <name> <action>`.

```
rake g task utils seed
```

Após o comando rodado, um arquivo `lib/utils.rake` será criado.
