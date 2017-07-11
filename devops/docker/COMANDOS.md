# Comandos

## IMAGES
Lista todas as imagens.  
**comando:** `$ docker images`

## SEARCH
Procura uma imagem.  
**comando:** `$ docker search IMAGE_NAME`  
**exemplo:** `$ docker search ubuntu`

## PULL
Baixa uma imagem.  
**comando:** `$ docker pull IMAGE_NAME`   
**exemplo:** `$ docker pull ubuntu`

## RUN
Executa a imagem, acessa um container e etc... Olhar o `docker help run`.  
**comando:** `$ docker run IMAGE_NAME`  
**exemplo:**

```
$ docker run ubuntu /bin/echo "Hello World" | Executa um novo container e passa um comando para ele executar.
$ docker run -i -t ubuntu | Executa um novo container e conecta nele.
$ docker run -i -t -p host_port:server_port node-express
```

## START / STOP  
Inicia a execução de um container  
**comando:** `$ docker start/stop CONTAINER_NAME`  
**exemplo:**

```
docker stop $(docker ps -a -q) | para a execução de todos os containers.
```

## ATTACH  
Acessa um container em execução.  
**comando:** `docker attach CONTAINER_ID`

## COMMIT
Cria uma imagem a partir de alterações feita em outra imagem.  
**comando:** `$ docker commit -a "You Name <you@email.com>" -m "node and express" CONTAINER_ID image-name:versionnumber`  
**exemplo:**

```
$ docker commit -a "Vinícius Galvão <viniciusj16@gmail.com>" -m "node and express" ee13a6de9a0c node-express:0.1

- a | author
- m | message
```

## TAG  
É uma boa prática taggear imagens com uma versão específica para que outras pessoas possam saber exatamente qual a imagem que eles estão executando. Adicionar a tag latest ajuda com que outras pessoas possam simplesmente se referir a sua imagem pelo nome dela, sem a versão, para baixá-la ou executá-la (node-express no nosso caso).

**comando:** `$ docker tag from-image:version new-image:version`  
**exemplo:**

```
$ docker tag node-express:0.1 node-express:latest
```

## PUSH  
Envia o container para o docker hub

**comando / exemplo:**
```
$ docker login
$ docker tag image-name your_docker_hub_username/image-name
$ docker rmi image-name (remove image)
$ docker push your_docker_hub_username/image-name
```

## PS
Lista os containers em execução. Para listar todos os containers, deve ser adicionada a flag `-a`.  
**comando:** `$ docker ps | $ docker ps -a`  
**exemplo:**

```
$ docker ps
$ docker rm -a
```

## RM  
Remove um container.  
**comando:** `$ docker rm CONTAINER_ID`  
**exemplo:**

```
$ docker rm node-express
$ docker rm -f node-express | -f = force
$ docker rm $(docker ps -a -q) | remove todos os containers do docker
```

## RMI  
Remove uma imagem.  
**comando:** `$ docker rmi CONTAINER_ID`  
**exemplo:**

```
$ docker rmi ubuntu
$ docker rmi -f ubuntu | -f = force
```

## DIFF  
Verifica todas as alterações feitas no container desde sua criação.  
**comando:** `$ docker diff CONTAINER_ID`

## EXEC  
Executa comandos dentro do container.  
**comando:** `docker exec CONTAINER_ID COMMAND`  
**exemplo:** `docker exec 9d6982ddfe3b ps -ef`

## INSPECT  
Visualiza todos os detalhes do container em execução.
**comando:** `docker inspect CONTAINER_ID`  
**exemplo:** `docker inspect 9d6982ddfe3b`

## STATS  
Exibe a estatística de consumo de cpu, memória e rede do container em execução.
**comando:** `docker stats CONTAINER_ID`  
**exemplo:** `docker stats 9d6982ddfe3b`
