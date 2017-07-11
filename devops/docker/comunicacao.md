# Comunicação - Containers

## Instruções

Neste exemplo iremos utilizar a imagem do nginx.

```
$ docker run -it --name nginx01 -p 8080:80 nginx /bin/bash
$ docker run -it --name web02 --link nginx01:web1 nginx /bin/bash
```

Para verificar se o link entre os containers está funcionando, rode o seguinte comando no segundo container

```
$ ping web1
```

O resultado deve parecer com o exemplo abaixo

```
PING web1 (172.17.0.2) 56(84) bytes of data.
64 bytes from web1 (172.17.0.2): icmp_seq=1 ttl=64 time=0.109 ms
64 bytes from web1 (172.17.0.2): icmp_seq=2 ttl=64 time=0.121 ms
```
