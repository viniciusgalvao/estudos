# Comandos

### Images
Lista todas as imagens.  
**comando:** `$ docker images`

### Search
Procura uma imagem.  
**comando:** `$ docker search IMAGE_NAME`  
**exemplo:** `$ docker search ubuntu`

### Pull
Baixa uma imagem.  
**comando:** `$ docker pull IMAGE_NAME`   
**exemplo:** `$ docker pull ubuntu`

### Run
Executa a imagem, acessa um container e etc... Olhar o `docker help run`.  
**comando:** `$ docker run IMAGE_NAME`  
**exemplo:**

```
$ docker run ubuntu /bin/echo "Hello World" | Executa um novo container e passa um comando para ele executar.
$ docker run -i -t ubuntu | Executa um novo container e conecta nele.
$ docker run -i -t -p host_port:server_port node-express
$ docker run -it --name CONTAINER_NAME ubuntu /bin/bash
$ docker run -it --name web02 --link CONTAINER_NAME:web1 ubuntu /bin/bash
```

### Start / Stop
Inicia a execução de um container  
**comando:** `$ docker start/stop CONTAINER_NAME`  
**exemplo:**

```
docker stop $(docker ps -a -q) | para a execução de todos os containers.
```

### Attach  
Acessa o processo já existente de um container em execução.  
**comando:** `docker attach CONTAINER_ID`

### Commit
Cria uma imagem a partir de alterações feita em outra imagem.  
**comando:** `$ docker commit -a "You Name <you@email.com>" -m "node and express" CONTAINER_ID image-name:versionnumber`  
**exemplo:**

```
$ docker commit -a "Vinícius Galvão <viniciusj16@gmail.com>" -m "node and express" ee13a6de9a0c node-express:0.1

- a | author
- m | message
```

### Tag  
É uma boa prática taggear imagens com uma versão específica para que outras pessoas possam saber exatamente qual a imagem que eles estão executando. Adicionar a tag latest ajuda com que outras pessoas possam simplesmente se referir a sua imagem pelo nome dela, sem a versão, para baixá-la ou executá-la (node-express no nosso caso).


**comando / exemplo:**
**comando:**

```
$ docker tag from-image:version new-image:version

--- exemplo ---

$ docker tag node-express:0.1 node-express:latest
```

### Push  
Envia o container para o docker hub

**comando / exemplo:**
```
$ docker login
$ docker tag image-name your_docker_hub_username/image-name
$ docker rmi image-name (remove image)
$ docker push your_docker_hub_username/image-name
```

### Update  
Altera cpu, memória de um container, enquanto ele está em execução.

**comando / exemplo:**

```
$ docker update [:flag] CONTAINER_ID

---- exemplo ---

$ docker update -m 512M CONTAINER_ID
$ docker update --cpu-shares 512 CONTAINER_ID
$ docker inspect CONTAINER_ID | grep -i cpu
```

### Ps
Lista os containers em execução. Para listar todos os containers, deve ser adicionada a flag `-a`.  
**comando:** `$ docker ps | $ docker ps -a`  
**exemplo:**

```
$ docker ps
$ docker rm -a
```

### Rm  
Remove um container.  
**comando:** `$ docker rm CONTAINER_ID`  
**exemplo:**

```
$ docker rm node-express
$ docker rm -f node-express | -f = force
$ docker rm $(docker ps -a -q) | remove todos os containers do docker
$ docker rm -v $(docker ps -a -q -f status=exited) | remove todos os containers que já morreram
```

### Rmi  
Remove uma imagem.  
**comando:** `$ docker rmi CONTAINER_ID`  
**exemplo:**

```
$ docker rmi ubuntu
$ docker rmi -f ubuntu | -f = force
$ docker rmi $(docker images -f dangling=true -q) | apaga imagens soltas
```

### Diff  
Verifica todas as alterações feitas no container desde sua criação.  
**comando:** `$ docker diff CONTAINER_ID`

### Exec  
Executa comandos dentro do container como um novo processo.  
**comando:** `docker exec CONTAINER_ID COMMAND`  
**exemplo:** `docker exec 9d6982ddfe3b ps -ef`

### Inspect  
Visualiza todos os detalhes do container em execução.
**comando:** `docker inspect CONTAINER_ID`  
**exemplo:** `docker inspect 9d6982ddfe3b`

### Stats  
Exibe a estatística de consumo de cpu, memória e rede do container em execução.
**comando:** `docker stats CONTAINER_ID`  
**exemplo:** `docker stats 9d6982ddfe3b`

### Network

Ambiente de rede que você pode compartilhar entre seus diversos containers. É como vários  containers estivessem na mesma rede.

**comando:** `docker network ${args}`  
**exemplo:** `docker network create backend`
