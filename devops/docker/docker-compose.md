# Docker Compose

É uma ferramenta para você poder definir vários containers em docker, em um arquivo único e utilizando apenas um comando, você pode iniciar todos os serviços de uma forma ágil.

## Comandos Úteis

```
$ docker-compose build # Constroi as imagens que estão no docker-compose.yml
$ docker-compose build --no-cache # Constroi as imagens, ignorando as contruções anteriores
$ docker-compose up [servico] Sobe todos os serviços ou serviço especificado
$ docker-compose stop Para os containers que estão executando
$ docker-compose start (Re)inicia containers parados
$ docker-compose rm [-f] Remove containers parados
```

## Scale

Quando queremos subir vários containers idênticos.

```
$ docker-compose scale servicename=number_of_containers

--- exemplo ---

$ docker-compose scale application=5

```

OBS: deve-se ter cuidado com as portas definidas no serviço para não causar conflito.
