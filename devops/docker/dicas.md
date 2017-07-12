# DICAS

## Sair do container e manter ele rodando

```
crtl + p + q
```

## Apagando containers que já morreram

```
$ docker rm -v $(docker ps -a -q -f status=exited)
```

## Apagando imagens soltas

```
$ docker rmi $(docker images -f dangling=true -q)
```

## Limpando volumes esquecidos

```
$ docker run -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker:/var/lib/docker -rm martin/docker-cleanup-volumes
```
