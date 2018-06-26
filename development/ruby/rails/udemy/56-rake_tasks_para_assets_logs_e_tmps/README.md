# Rake Tasks para Assets, Logs e TPM's

## assets

> rake assets:precompile

```
Serve para compilar os assets e jogar na pasta public/assets. Deve ser utilizado quando o projeto for para produção.
```

> `rake assets:clean` Remove os assets compilados antigos
> `rake assets:clobber` Remove os assets compilados

## logs

Para limpar os logs basta executar:

```
rake log:clear
```

Caso queira especificar os arquivos de logs que devem ser limpos, basta executar:

```
rake log:clear LOGS=test,development
```

## arquivos temporários

Execute o comando `rake -T tmp` para listar as tarefas disponíveis para arquivos temporários.

> `rake tmp:clear` Limpa todos os arquivos da pasta tmp
> `rake tmp:create` Cria toda a estrutura da pasta tmp
