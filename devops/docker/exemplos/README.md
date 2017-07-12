# Exemplos

## Pastas Compartilhads

Tudo que acontece na pasta "compartilhada" do host é refletida na pasta do container e vice-versa.

```
docker run --name postgres \
 -v /mnt/pgdata:/var/lib/postgresql/pgdata \
 -e LANG=en_us.utf8 \
 -e PGDATA=/var/lib/postgresql/pgdata
 -e POSTGRES_PASSWORD=postgres \
 -p 5432:5432 -d postgres:9.3.6
```

Importante: `-v diretorio-host:diretorio-container`
