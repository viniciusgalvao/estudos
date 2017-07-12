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

## Limitando o uso de memória do host em um container

Para criar um container limitando o uso de memória, execute:

```
$ docker run -it -m 512M ubuntu /bin/bash
```

Saia do container utilizando o comando `crtl + p + q` e execute o seguinte comando:

```
$ docker inspect CONTAINER_ID | grep -i mem
```

O resultado deve ser parecido com o exemplo mostrado abaixo:

```
"Memory": 536870912,
"CpusetMems": "",
"KernelMemory": 0,
"MemoryReservation": 0,
"MemorySwap": 1073741824,
"MemorySwappiness": -1,
```

## Limitando o uso da cpu do host em um container

Para limitar-mos o uso da cpu, deve ser utilizada a flag `--cpu-shares LIMIT_VALUE`, Abaixo um exemplo:

```
$ docker run -ti --cpu-shares 1024 ubuntu /bin/bash
```

Saia do container utilizando o comando `crtl + p + q` e execute o seguinte comando:

```
$ docker inspect CONTAINER_ID | grep -i cpu
```

O resultado deve ser parecido com o exemplo mostrado abaixo:

```
"CpuShares": 1024,
"NanoCpus": 0,
"CpuPeriod": 0,
"CpuQuota": 0,
"CpuRealtimePeriod": 0,
"CpuRealtimeRuntime": 0,
"CpusetCpus": "",
"CpusetMems": "",
"CpuCount": 0,
"CpuPercent": 0,
```

## Alterando o limite de uso da cpu e memória utilizando o comando Update

Subindo os containers com limitação de cpu e memória:

```
$ docker run -ti --name c1MEM -m 512M ubuntu /bin/bash
$ docker run -ti --name c2CPU --cpu-shares 1024 ubuntu /bin/bash
```

Alterando o limite de memória do container criado `c1MEM`:

```
$ docker update -m 256M CONTAINER_ID
```

Alterando o limit de cpu do container criado `c2CPU`:

```
$ docker update --cpu-shares 512 CONTAINER_ID
```
